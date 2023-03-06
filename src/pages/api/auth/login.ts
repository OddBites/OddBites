import { NextApiRequest, NextApiResponse } from "next";
import { signIn } from "../../../util/auth";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { email, password } = req.body;
    const user = await signIn(email, password);
    if (user) {
	res.status(200).json({});
    } else {
	res.status(401).json({});
    }
}
