import { NextApiRequest, NextApiResponse } from "next";
import { signOut } from "../../../util/auth";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    signOut();
}
