import React, { useContext } from "react"
import { ThemeContext } from "../themecontext";
import Sidenav from "./Sidenav";
import Navbar from "../Navbar";

const Getting = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <>   <div className='flex flex-auto min-w-0'>
        <div className={`sticky top-0 h-[100vh] w-[270px] min-w-[270px] border-r ${theme==='dark'?' border-gray-500':'border-gray-200 '}`}>
            <Sidenav/>
        </div>
        <div className={`flex flex-col flex-auto min-h-screen min-w-0 relative w-full border-b ${theme==='dark'?' border-gray-500':'border-gray-200 '} `}>
            <Navbar/>
            <div className='h-full flex flex-auto flex-col justify-between'>
        <div className="text-left ml-7 mt-14 space-y-4">
            <h2 className="font-bold text-2xl">Getting Started</h2>
            <p>Get your journey underway with Securepacks using our Builder, the pack CLI, and Docker.</p>
            <p>This tutorial guides you through the process of leveraging pack and buildpacks to craft a fully operational app image from your source code.</p>
            <h3 className="font-bold text-xl mt-6">Installation</h3>
            <p>To execute the build process in a controlled environment, pack harnesses Docker or a Docker-compatible daemon to construct containers for buildpack execution. Therefore, it's imperative to ensure that both pack and a compatible daemon are installed:</p>
            <ul className="list-disc ml-5 space-y-2">
                <li><strong>Docker Installation</strong>: Follow this guide to install Docker. <button className="bg-blue-500 text-white px-2 py-1 rounded">Guide</button></li>
                <li><strong>pack CLI Installation</strong>: Follow this guide to install the pack CLI tool. <button className="bg-blue-500 text-white px-2 py-1 rounded">Guide</button></li>
            </ul>
            <h3 className="font-bold text-xl mt-6">Building a Java App</h3>
            <p>Before embarking on our journey, let's ensure you're equipped with the fundamentals of Securepacks and their mechanics.</p>
            <p>We've reached our final destination, but before we conclude, let's witness everything in action using <code className="bg-gray-400 px-1 rounded">pack build</code>.</p>
            <p>Execute the following commands in your shell to clone and build a simple Java app:</p>
            <ol className="list-decimal ml-5 space-y-2">
                <li>Clone the samples repository:
                    <pre className="bg-gray-400 p-2 rounded"><code>git clone https://github.com/buildpacks/samples</code></pre>
                </li>
                <li>Navigate to the Java apps sub-directory:
                    <pre className="bg-gray-400 p-2 rounded"><code>cd samples/apps/java-maven</code></pre>
                </li>
                <li>Build the app using pack:
                    <pre className="bg-gray-400 p-2 rounded"><code>pack build myapp --builder cnbs/sample-builder:jammy</code></pre>
                </li>
            </ol>
            <p>Note: Since this is your first time running <code className="bg-gray-400 px-1 rounded">pack build</code> for <code className="bg-gray-400 px-1 rounded">myapp</code>, the build might take longer than usual. Subsequent builds will leverage various forms of caching. If you're curious, try running <code className="bg-gray-400 px-1 rounded">pack build myapp</code> a second time to observe the difference in build time.</p>
            <h3 className="font-bold text-xl mt-6">Running Your App</h3>
            <p>Congratulations! You now have a runnable app image named <code className="bg-gray-400 px-1 rounded">myapp</code> available on your local Docker daemon. This journey was indeed brief, but note that your app was constructed without the need to install a JDK, execute Maven, or configure a build environment. <code className="bg-gray-400 px-1 rounded">pack</code> and buildpacks handled all of that for you.</p>
            <p>To locally test your new app image, you can run it with Docker:</p>
            <pre className="bg-gray-400 p-2 rounded"><code>docker run --rm -p 8080:8080 myapp</code></pre>
            <p>Now, open your favorite browser and navigate to <code className="bg-gray-400 px-1 rounded">localhost:8080</code> to savor the experience.</p>
            <h3 className="font-bold text-xl mt-6">Taking Your Image to Greater Heights</h3>
            <p><code className="bg-gray-400 px-1 rounded">pack</code> utilizes buildpacks to effortlessly craft OCI images that are runnable nearly anywhere. Feel free to deploy your newfound image to your preferred cloud platform!</p>
        </div>
        </div>
        </div>
    </div>
        </>
    )
}

export default Getting