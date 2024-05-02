## Build Python Apps with SecurePacks 
This guide explains how to use the SecurePacks for Python to create applications for various common scenarios. For more detailed information about the buildpack’s behavior and setup options, refer to the SecurePacks Python  Reference documentation. 

### Building a Sample App 

 

To create a sample app locally using this buildpack with the pack CLI, follow these steps: 

 

1. Clone the sample repository: 

``` 
git clone https://github.com/initializ-buildpacks/samples 
cd samples/python/pip 
``` 

2. Run the build command: 
``` 
pack build my-app --buildpack initializ-buildpacks/python \ 
  --builder initializbuildpacks/securepacks-initzbuilder 
``` 

See the samples repository for instructions on running the app. 
3. Run the app:
``` 
docker run --interactive --tty --env PORT=8080 --publish 8080:8080 my-app
```
 

### Supported configurations for Python apps: 

 

1. Installing a Specific CPython Version :
You can specify a version of CPython 3 to use during deployment by setting the BP_CPYTHON_VERSION environment variable during the build process. Ensure that the chosen version is available within the buildpack. Refer to the release notes for supported versions. 

* Specifying a CPython version is optional; the buildpack will use the default version if not specified. 

 

2.  Using a Package Manager 
  For package management in Python apps, you have the following options: 
   - Pip 
   - Pipenv 
   - Miniconda 
   - Poetry 

 

     Each option has specific instructions: 

  <ins>Pip</ins> : 

   Include a valid requirements.txt file at the root of your app source code to trigger the pip installation process. You can configure the Pip version using the $BP_PIP_VERSION variable during build. 

 

<ins>Pipenv</ins> :

 

Include a valid Pipfile file at the root of your app source code to trigger the pipenv installation process. You can configure the Pipenv version using the $BP_PIPENV_VERSION variable during build. 

 

<ins>Miniconda</ins> :

 

The buildpack supports creating or updating a conda environment from an environment.yml file or a package-list.txt file at the root of the app source code. Configuring a specific version of Miniconda is not supported. 

 

<ins>Poetry</ins> :

 

Include a pyproject.toml file at the root of your app source code to trigger the poetry installation process. You can configure the Poetry version using the $BP_POETRY_VERSION variable during build. 

 

### Enable Process Reloading 

watchexec is a tool that can restart your server process when files in the app’s working directory change. To use watchexec, set the $BP_LIVE_RELOAD_ENABLED environment variable during build. 
```
pack build myapp --env BP_LIVE_RELOAD_ENABLED=true
```
### Install a Custom CA Certificate 

Follow the instructions in the CA Certificates section to include custom CA certificates in the container root truststore at build-time and runtime. 

 

### Override the Start Process 

 Set custom start processes for your app image using the Procfiles section of the configuration docs. 

### Set Environment Variables 

 Embed launch-time environment variables in your app image using the Environment Variables Buildpack documentation. 

### Add Custom Labels 

 Add labels to your app image using the Applying Custom Labels section of the configuration docs. 

### Enable DEBUG Logging 

 Access extra debug logs during the image build process by setting the BP_LOG_LEVEL environment variable to DEBUG at build time. 
 ```
 pack build my-app --buildpack initializ-buildpacks/python \
  --env BP_LOG_LEVEL=DEBUG
```

 ### Access the Software Bill of Materials 

 Generate a software bill of materials (SBOM) for applications using Pip, Pipenv, or Poetry. Limited support is available for Miniconda applications; refer to the SBOM how-to documentation for details. 