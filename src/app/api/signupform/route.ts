import { NextRequest, NextResponse } from "next/server";
import {
  getUserDetails,
  postUserDetails,
} from "../../../../_lib/helperFunctions";

export const GET = async () => {
  try {
    const userDetailsRes = await getUserDetails();
    return NextResponse.json(userDetailsRes);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const userDetailsObject = await request.json();
    const { userName, password, email } = userDetailsObject;

    const userDetailsObjectWithRole = {
      userName: userName,
      password: password,
      email: email,
      role: "user",
    };

    postUserDetails(userDetailsObjectWithRole);
    return NextResponse.json(userDetailsObject);
  } catch (error) {
    return NextResponse.json(error);
  }
};
