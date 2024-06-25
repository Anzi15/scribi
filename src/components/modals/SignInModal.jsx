import React from "react";
import Modal from "./Modal";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const SignInModal = () => {
  return (
    <>
      <Modal focusOutAble={false} closeAble={false}>
        <h1 className="text-xl">You must Login to continue</h1>

        <Link to={"/log-in"}>
          <Button className="text-white my-6 mx-3" variant="gradient">
            Log in
          </Button>
        </Link>

        <Link to={"/sign-up"}>
          <Button className="text-white my-6 mx-3" variant="gradient">
            Sign up
          </Button>
        </Link>

        {/* <form action="" className='text-dark my-4 flex flex-col items-center justify-center'>
            <div className="password-sign-in w-[50%] flex flex-col gap-4">
            <input type="email" name="" id="" autoComplete='email' />

            <input type="password" name="" id="" />
            </div>
          </form> */}
      </Modal>
    </>
  );
};

export default SignInModal;
