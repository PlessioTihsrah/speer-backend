import { RequestHandler } from 'express';
const validateAuthRequestBody: RequestHandler = (req, res, next) => {
    const email = req.body.email?.trim();
    const password = req.body.password?.trim();
    if (!email || !password) {
        return res.status(400).json({ "error": "Email or password missing in body" });
    }
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const validEmail = emailRegex.test(email);
    if (!validEmail) {
        return res.status(400).json({ "error": "Invalid email" });
    }
    if (password.length < 6) {
        return res.status(400).json({ "error": "Password must be of atleast 6 characters" });
    }
    req.body = { email, password }; // removing anything else sent in body, and removing white space
    next();
}

export {
    validateAuthRequestBody
}