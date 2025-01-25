# Check if ImageMagick is installed
$imageMagick = Get-Command magick -ErrorAction SilentlyContinue
if (-not $imageMagick) {
    Write-Host "ImageMagick is not installed. Please install it first."
    Write-Host "You can install it via: winget install ImageMagick.ImageMagick"
    exit 1
}

# Set paths
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootPath = Split-Path -Parent $scriptPath
$publicPath = Join-Path $rootPath "public"
$svgPath = Join-Path $publicPath "icon.svg"

# Generate icons
$sizes = @(192, 512)
foreach ($size in $sizes) {
    $outputPath = Join-Path $publicPath "icon-${size}x${size}.png"
    magick convert $svgPath -resize ${size}x${size} $outputPath
    if ($?) {
        Write-Host "Generated $outputPath"
    } else {
        Write-Host "Failed to generate $outputPath"
    }
} 