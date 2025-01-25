# Check if ImageMagick is installed
$magick = Get-Command magick -ErrorAction SilentlyContinue
if (-not $magick) {
    Write-Host "ImageMagick is not installed. Please install it first."
    Write-Host "You can install it via: winget install ImageMagick.ImageMagick"
    exit 1
}

# Create portfolio directory if it doesn't exist
$portfolioDir = "public/portfolio"
if (-not (Test-Path $portfolioDir)) {
    New-Item -ItemType Directory -Force -Path $portfolioDir
}

# Generate ecommerce image
magick convert -size 800x600 `
    gradient:purple-blue `
    -swirl 45 `
    -blur 0x3 `
    "$portfolioDir/ecommerce.webp"

# Generate banking image
magick convert -size 800x600 `
    gradient:blue-cyan `
    -wave 20x100 `
    -blur 0x2 `
    "$portfolioDir/banking.webp"

# Generate cloud image
magick convert -size 800x600 `
    gradient:indigo-violet `
    -plasma 3 `
    -blur 0x2 `
    "$portfolioDir/cloud.webp"

# Generate healthcare image
magick convert -size 800x600 `
    gradient:green-blue `
    -ripple 20x10 `
    -blur 0x2 `
    "$portfolioDir/healthcare.webp"

Write-Host "Portfolio images generated successfully!" 