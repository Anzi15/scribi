import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Input,
    Checkbox,
    Button,
  } from "@material-tailwind/react";

import GoogleLogo from "../assets/icons/GoogleLogo";
import GithubLogo from "../assets/icons/GithubLogo";
import { Link } from "react-router-dom";


const SignUpPage = () => {
  return (
    <>
    <main className="w-screen min-h-screen flex justify-center items-center bg-gray-300">

    <Card className="w-96 max-w-[90vw]">
      <CardHeader
        variant="gradient"
        color="gray"
        className="mb-4 grid h-28 place-items-center"
      >
        <Typography variant="h3" color="white">
          Sign Up
        </Typography>
      </CardHeader>

      <CardBody className="flex flex-col gap-6">
        <Input label="Email" size="lg" variant="standard" type="email" autoComplete="email"/>
        <Input label="Password" size="lg" variant="standard" type="password" autoComplete="new-password"/>


      </CardBody>
      <CardFooter className="pt-0">
        <Button variant="gradient" fullWidth>
          Sign Up
        </Button>
        <Typography variant="small" className="mt-6 flex justify-center">
          Already a user? 
          <Link
            to="../log-in"
            variant="small"
            color="blue-gray"
            className="ml-1 font-bold"
          >
            Log in
          </Link>
        </Typography>

        
        <div className="auth-providers-con w-full py-6 flex flex-col gap-4">
          <button className="flex justify-center items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 min-w-full">
          <GoogleLogo/>
          <span>Continue with Google</span>
          </button>

          <button className="flex justify-center items-center bg-white dark:bg-gray-900 border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 dark:text-white hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 min-w-full">
            <GithubLogo/>
          <span>Continue with GitHub</span>
          </button>

        </div>
      </CardFooter>
    </Card>

    </main>
    </>
  )
}

export default SignUpPage