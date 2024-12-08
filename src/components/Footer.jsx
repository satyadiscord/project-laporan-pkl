export default function Footer() {
  return (
    <>
      <footer className="bg-white shadow-inner dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4 flex flex-col items-center justify-center">
          <span className="text-sm text-gray-500 text-center dark:text-gray-400">
            © 2024{" "}
            <a href="/" className="hover:underline">
              Satya™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}
