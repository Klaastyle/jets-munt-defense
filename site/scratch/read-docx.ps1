$docxPath = "C:\Users\Albert\Desktop\Antigravity\Jets-Munt\SEO\Estrategia de Anuncios y Landings.docx"
$zipPath = "C:\Users\Albert\Desktop\Antigravity\Jets-Munt\SEO\temp_anuncios.zip"
$extractPath = "C:\Users\Albert\Desktop\Antigravity\Jets-Munt\SEO\temp_extracted_anuncios"
$outPath = "C:\Users\Albert\Desktop\Antigravity\Jets-Munt\SEO\extracted_anuncios.txt"

Copy-Item $docxPath -Destination $zipPath
Expand-Archive -Path $zipPath -DestinationPath $extractPath -Force

[xml]$xmlContent = Get-Content "$extractPath\word\document.xml"
$text = $xmlContent.SelectNodes("//*[local-name()='t']") | ForEach-Object { $_."#text" }
$text -join ' ' | Out-File -FilePath $outPath -Encoding utf8

Remove-Item -Path $zipPath
Remove-Item -Path $extractPath -Recurse -Force
