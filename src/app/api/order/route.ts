import { NextRequest, NextResponse } from "next/server";
import {
  getShippingDetails,
  postShippingDetails,
} from "../../../../_lib/helperFunctions";

export const GET = async () => {
  try {
    const orderDetails = await getShippingDetails();
    return NextResponse.json(orderDetails);
  } catch (error) {
    return NextResponse.json(error);
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const orderDetails = await request.json();
    postShippingDetails(orderDetails);
    return NextResponse.json(orderDetails);
  } catch (error) {
    return NextResponse.json(error);
  }
};
