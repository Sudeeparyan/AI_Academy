# Define paths
$viteProjectPath = "E:\Github\AI_Academy\Client"  # Change this to your Vite project path
$buildOutputPath = "$viteProjectPath\dist"        # Default Vite build folder
$pythonStaticPath = "E:\Github\AI_Academy\Server\static"  # Change this to your Python static folder


# Navigate to Vite project directory
Set-Location -Path $viteProjectPath

# Check if the build folder exists
if (Test-Path $buildOutputPath) {
    # Remove existing files in the Python static folder
    Write-Host "Cleaning up existing static files..."
    Remove-Item -Path "$pythonStaticPath\*" -Recurse -Force

    # Copy new build files
    Write-Host "Copying new build files..."
    Copy-Item -Path "$buildOutputPath\*" -Destination $pythonStaticPath -Recurse -Force

    Write-Host "Build and transfer completed successfully!"
} else {
    Write-Host "Error: Build output not found. Check if Vite build was successful."
}
