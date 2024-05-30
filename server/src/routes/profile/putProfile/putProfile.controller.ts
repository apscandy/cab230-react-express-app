import { Request, Response } from "express";
import { getUser, updateUser } from "./putProfile.service";
import moment from "moment";


export async function putProfile(req: Request, res: Response): Promise<void> {
    const emailPath = req.params.email.trim() as string;
    const { body } = req;

    // MissingAuthHeader
    if (res.locals.authenticated === false && res.locals.authenticatedToken === null) {
        res.status(401).json({
            "error": true,
            "message": "Authorization header ('Bearer token') not found"
        })
        return;
    }

    // Forbidden. Email address associated with JWT token is not the same as email provided in path parameter.
    if (res.locals.authenticated !== false && res.locals.authenticatedToken !== null && res.locals.authenticatedEmail !== emailPath) {
        res.status(403).json({
            "error": true,
            "message": "Forbidden"
        })
        return;
    }

    //InvalidProfileBodyFormat
    if (!body.firstName || !body.lastName || !body.dob || !body.address) {
        res.status(400).json({
            "error": true,
            "message": "Request body incomplete: firstName, lastName, dob and address are required."
        })
        return;
    }

    // InvalidFirstNameLastNameAddressFormat
    if (typeof body.firstName !== 'string' || typeof body.lastName !== 'string' || typeof body.address !== 'string') {
        res.status(400).json({
            "error": true,
            "message": "Request body invalid: firstName, lastName and address must be strings only."
        })
        return;
    }

    //InvalidProfileDateFormat
    if (!moment(body.dob, "YYYY-MM-DD", true).isValid()) {
        res.status(400).json({
            "error": true,
            "message": "Invalid input: dob must be a real date in format YYYY-MM-DD."
        })
        return;
    }
    const dateOfBirth = moment(body.dob, "YYYY-MM-DD", false).format()

    if(new Date(body.dob.split("T")[0]) > new Date()){
        res.status(400).json({
            "error": true,
            "message": "Invalid input: dob must be a date in the past."
        })
        return;
    }

    await updateUser(emailPath, body.firstName, body.lastName, body.address, body.dob.split("T")[0])
    res.status(200).json({
        email: emailPath,
        firstName: body.firstName,
        lastName: body.lastName,
        address: body.address,
        dob: body.dob.split("T")[0]
    })
    return;







    // let user: any;
    // try {
    //     user = await getUser(emailPath)
    // } catch (error) {
    //     res.status(500).json({
    //         "error": true,
    //         "message": "there was a critical error, please try again later"
    //     })
    //     return;
    // }
    // if (user.length === 0 || user === null) {
    //     res.status(404).json({
    //         "error": true,
    //         "message": "User not found"
    //     })
    //     return;
    // }
    // Unauthorized 
    res.status(200).json({ "test": "test" })
    return;
}