const Otp = require('../models/Otp');
const nodemailer = require('nodemailer');

//generating random otp
const generateOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

//sending otp
exports.sendOtp = async (req, res) => {
    const{ email } = req.body;
    const otp = generateOtp();
    const newOtp = new Otp({ email, otp });
    try {
        await newOtp.save();
        console.log('Successfully saved Otp to DB:', { email, otp });
        // Send Email
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });
        let mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Authentication OTP',
            text: `Your OTP Authentication Code is ${otp}`
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                console.error('Email sending error:', err); 
                return res.status(500).json({ message: 'Email error', err });
            }
            console.log('Email sent!:', info); 
            return res.json({ message: 'OTP sent!' });
        });
    } catch (error) {
        console.error('Error saving OTP to database:', error); 
        return res.status(500).json({ message: 'Database error', error });
    }
};
//verify otp
exports.verifyOtp = async (req, res) => {
    const { email, otp } = req.body;
    try {
        const data = await Otp.findOne({ email, otp });
        if (!data) {
            return res.status(400).json({ success: false, message: 'Invalid OTP!' });
        }

        return res.json({ success: true });
    } catch (error) {
        console.error('Error verifying OTP:', error);
        return res.status(500).json({ success: false, message: 'Error verifying OTP', error });
    }
};