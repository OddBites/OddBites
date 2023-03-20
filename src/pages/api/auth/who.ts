import { NextApiRequest, NextApiResponse } from "next";
import { currentUser } from "../../../util/auth";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const user = currentUser();
    if (user) {
	res.status(200).json({
	    email: user.email
	});
    } else {
	res.status(401).json({});
    }
}
