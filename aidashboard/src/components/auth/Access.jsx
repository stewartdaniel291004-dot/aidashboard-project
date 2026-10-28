import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import toast, { Toaster } from "react-hot-toast";
import { IoMdArrowRoundBack } from "react-icons/io";
import { HashLink } from "react-router-hash-link";
import { FaXTwitter } from "react-icons/fa6";
import { LogoMark } from "../../common/parts/Logo";

function Login() {
  const [loading, setloading] = useState(false);
  const { googleSignIn, GithubSignIn, TwitterSignIn } = useUserAuth();
  const navigate = useNavigate();

  const GoogleAuth = async () => {
    setloading(true);
    try {
      await googleSignIn();
      // toast.success("Authentication Success", { position: "top-right" });
      navigate("/dashboard");
    } catch (err) {
      toast.error(
        err.message
          .replace("Firebase:", "")
          .replace(".", "")
          .replace("Error (", "")
          .replace(")", "")
          .replace("auth/", "")
          .replaceAll("-", " "),
        { position: "top-right" }
      );
    } finally {
      setloading(false);
    }
  };

  const GitHubAuth = async () => {
    setloading(true);

    try {
      await GithubSignIn();
      navigate("/dashboard");
    } catch (err) {
      toast.error(
        err.message
          .replace("Firebase:", "")
          .replace(".", "")
          .replace("Error (", "")
          .replace(")", "")
          .replace("auth/", "")
          .replaceAll("-", " "),
        { position: "top-right" }
      );
    } finally {
      setloading(false);
    }
  };

  const TwitterAuth = async () => {
    setloading(true);

    try {
      await TwitterSignIn();
      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      toast.error(
        err.message
          .replace("Firebase:", "")
          .replace(".", "")
          .replace("Error (", "")
          .replace(")", "")
          .replace("auth/", "")
          .replaceAll("-", " "),
        { position: "top-right" }
      );
    } finally {
      setloading(false);
    }
  };

  const btn =
    "inline-flex h-12 w-full select-none items-center justify-center gap-3 rounded-xl border border-white/70 bg-white/80 px-4 text-sm font-semibold text-gray-800 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white hover:shadow-glow focus:outline-none focus:ring-4 focus:ring-brand-200 disabled:cursor-not-allowed disabled:opacity-60";

  return (
    <div className="relative flex min-h-screen w-full overflow-hidden bg-weave-soft">
      <div className="ww-blob -left-24 top-10 h-80 w-80 bg-brand-400" />
      <div className="ww-blob bottom-0 right-1/2 h-72 w-72 bg-weave-cyan opacity-40" />
      <Link
        to="/home"
        aria-label="Back to home"
        className="fixed left-4 top-4 z-50 flex items-center justify-center rounded-xl glass p-2.5 text-brand-700 transition hover:scale-105"
      >
        <IoMdArrowRoundBack className="text-xl" />
      </Link>

      <div className="relative flex w-full items-center justify-center px-5 py-16 lg:w-1/2">
        <div className="w-full max-w-md rounded-3xl glass p-7 sm:p-9">
          <div className="flex justify-center">
            <LogoMark className="size-14" />
          </div>
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-gray-900">
            Enter your <span className="text-weave">Space</span>
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Sign in to start learning and building with WebWeave.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <button disabled={loading} onClick={GoogleAuth} className={btn}>
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" className="h-[18px] w-[18px]" />
              Continue with Google
            </button>
            <button disabled={loading} onClick={GitHubAuth} className={btn}>
              <img src="https://www.svgrepo.com/show/512317/github-142.svg" alt="" className="h-[18px] w-[18px]" />
              Continue with GitHub
            </button>
            <button disabled={loading} onClick={TwitterAuth} className={btn}>
              <FaXTwitter className="text-[18px]" />
              Continue with Twitter
            </button>
          </div>

          <p className="mt-6 text-center text-xs leading-relaxed text-gray-500">
            By signing in to WebWeave, you accept our{" "}
            <HashLink to="/terms-of-use#privacy-policy" className="font-medium text-brand-600 underline underline-offset-2">
              Privacy Policy
            </HashLink>{" "}
            and{" "}
            <HashLink to="/terms-of-use#data-collect" className="font-medium text-brand-600 underline underline-offset-2">
              Data Collection
            </HashLink>{" "}
            terms, and agree to our{" "}
            <HashLink to="/terms-of-use#misuse-policy" className="font-medium text-brand-600 underline underline-offset-2">
              Misuse Policy
            </HashLink>
            .
          </p>
        </div>
      </div>

      <div className="relative hidden w-1/2 p-4 lg:block">
        <div className="relative flex h-full flex-col justify-end overflow-hidden rounded-[2rem] bg-weave p-12 text-white">
          <div className="ww-blob right-0 top-0 h-96 w-96 bg-weave-cyan opacity-40" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.12)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="relative">
            <h1 className="max-w-lg text-5xl font-bold leading-tight">Welcome to the WebWeave community</h1>
            <p className="mt-4 max-w-md text-lg text-white/80">
              Learn, build and collaborate with AI-powered workspaces and Sara AI at your side.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["CodeSpace", "WebSpace", "Sara AI", "Space Notes"].map((t) => (
                <span key={t} className="rounded-full glass-dark px-4 py-1.5 text-sm">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default Login;
