// Get list of all menus:
// b = document.getElementsByClassName("goog-menuitem-label")
// vals = b.map(x => x.attributes[0].value)

// Level 0
tms = document.getElementsByClassName("menu-button goog-control goog-inline-block")
Array.from(tms).map(x => x.innerText)
// ["File", "Edit", "View", "Insert", "Format", "Tools", "Add-ons", "Help", "Accessibility", "Debug"]

// Get all top class menus: Level 1
verts = document.getElementsByClassName("goog-menu goog-menu-vertical docs-material docs-menu-hide-mnemonics")
Array.from(verts).map(x => x.innerText)
/*
0: "Export options disabled
		Share
		Unlock(J)
		New►
		Open Ctrl+O
		Make a copy
		Save as
		Google Docs(U)
		Download►
		Email as attachment
		Make available offline
		Version history►
		Rename
		Move
		Edit description(Y)
		Ctrl+Shift+E
		Move to trash
		Publish to the web
		Email collaborators
		Document details(B)
		Language►
		Page setup
		Print preview
		Print Ctrl+P"

1: "Export options disabled
	UndoCtrl+Z
	RedoCtrl+Y
	CutCtrl+X
	CopyCtrl+C
	PasteCtrl+V
	Paste without formattingCtrl+Shift+V
	DeleteSelect allCtrl+A
	Find and replaceCtrl+H"
2: "Print layoutMode►
	Zoom►
	Show ruler
	Show document outlineCtrl+Alt+A Ctrl+Alt+H
	Show equation toolbar
	Show section breaks
	Full screen"
3: "Image►
	Table►
	Drawing►
	Chart(Q)►
	Horizontal line
	FootnoteCtrl+Alt+F
	Special characters
	EquationHeaders & footers►
	Page numbers►
	Break►
	LinkCtrl+K
	CommentCtrl+Alt+M
	Bookmark
	Table of contents►"
4: "Left-to-right text
	Right-to-left textText(S)►
	Paragraph styles►
	Align & indent►
	Line spacing►
	Columns►
	Bullets & numbering►
	Headers & footers►
	Headers & footers
	Page numbersTable(2)►
	Image►
	Clear formattingCtrl+\
	Borders & lines(Q)►"
5: "Spelling and grammar►
	Word countCtrl+Shift+C
	Review suggested editsCtrl+Alt+O Ctrl+Alt+U
	NewCompare documents
	ExploreCtrl+Alt+Shift+I
	Linked objectsDictionaryCtrl+Shift+Y
	Translate document
	Voice typingCtrl+Shift+S
	Script editorPreferences
	Accessibility settings
	Activity dashboard(Z)
	Activity dashboard privacyNotifications(J)"
6: "Document add-onsVisualCV Resume Builder►Get add-onsManage add-ons"
7: "Docs HelpTrainingUpdatesSend feedback(R)Report abuse/copyrightKeyboard shortcutsCtrl+/"
8: "DocumentFrom templateSpreadsheetPresentationFormDrawing"
9: "Microsoft Word (.docx)
	Microsoft Word (.doc)
	OpenDocument Format (.odt)
	Rich Text Format (.rtf)
	PDF Document (.pdf)
	Plain Text (.txt)
	Web Page (.html, zipped)
	EPUB Publication (.epub)"
10: "Name current version
	See version historyCtrl+Alt+Shift+H"
11: "BarColumn
	LinePie
	From Sheets"
*/

// Level 2
third = document.getElementsByClassName("goog-menu goog-menu-vertical docs-material goog-menu-noaccel")
Array.from(third).map(x => x.innerText)
/*
 0: "Afrikaans↵Azərbaycan↵Bahasa Indonesia↵Bahasa Melayu↵Català↵Čeština↵Cymraeg↵Dansk↵Deutsch↵Schweizer Hochdeutsch↵Eesti↵English (United Kingdom)↵English (United States)↵Español↵Español (Latinoamérica)↵Euskara↵Filipino↵Français↵Français (Canada)↵Galego↵Hrvatski↵Isizulu↵Íslenska↵Italiano↵Kiswahili↵Latviešu↵Lietuvių↵Magyar↵Malti↵မြန်မာစာ↵Nederlands↵Norsk (Nynorsk)↵Norsk (Bokmål)↵Polski↵Português (Brasil)↵Português (Portugal)↵Română↵Slovenčina↵Slovenščina↵Suomi↵Svenska↵Tiếng Việt↵Türkçe↵беларуская↵Български↵Қазақ↵Монгол↵Русский↵Српски↵Українська↵Ελληνικά↵հայերեն↵עברית↵اردو↵العربية↵فارسی↵नेपाली↵मराठी↵हिन्दी↵বাংলা↵ਪੰਜਾਬੀ↵ગુજરાતી↵தமிழ்↵తెలుగు↵ಕನ್ನಡ↵മലയാളം↵සිංහල↵ไทย↵ລາວ↵ქართულად↵አማርኛ↵ខ្មែរ↵中文（中国）↵中文（台灣）↵中文（香港）↵日本語↵한국어"
1: "Document add-ons↵VisualCV Resume Builder↵►↵Get add-ons↵Manage add-ons"
2: ""
3: "Save as my default stylesUse my default stylesReset styles"
4: "EditingEdit document directlySuggestingEdits become suggestionsViewingRead or print final document"
5: "AfrikaansAzərbaycanBahasa IndonesiaBahasa MelayuBasa JawaBasa SundaCatalàČeštinaDanskDeutschEnglish (Australia)English (Canada)English (Ghana)English (India)English (Ireland)English (Kenya)English (New Zealand)English (Nigeria)English (Philippines)English (South Africa)English (Tanzania)English (United Kingdom)English (United States)EspañolEspañol (Argentina)Español (Bolivia)Español (Chile)Español (Colombia)Español (Costa Rica)Español (Ecuador)Español (El Salvador)Español (España)Español (Estados Unidos)Español (Guatemala)Español (Honduras)Español (Latinoamérica)Español (México)Español (Nicaragua)Español (Panamá)Español (Paraguay)Español (Perú)Español (Puerto Rico)Español (República Dominicana)Español (Uruguay)Español (Venezuela)EuskaraFilipinoFrançaisGalegoHrvatskiIsizuluÍslenskaItalianoItaliano (Italia)Italiano (Svizzera)Kiswahili (Kenya)Kiswahili (Tanzania)LatviešuLietuviųMagyarNederlandsNorsk (Bokmål)PolskiPortuguês (Brasil)Português (Portugal)RomânăSlovenčinaSlovenščinaSuomiSvenskaTiếng ViệtTürkçeΕλληνικάБългарскиРусскийСрпскиУкраїнськаհայերենעברית(اردو (بھارت(اردو (پاکستانالعربية(العربية (إسرائيل(العربية (الأردن(العربية (الإمارات(العربية (البحرين(العربية (الجزائر(العربية (السعودية(العربية (الكويت(العربية (المغرب(العربية (تونس(العربية (عُمان(العربية (فلسطين(العربية (قطر(العربية (لبنان(العربية (مصرفارسیनेपालीमराठीहिन्दीবাংলা (বাংলাদেশ)বাংলা (ভারত)ગુજરાતીதமிழ் (இந்தியா)தமிழ் (இலங்கை)தமிழ் (சிங்கப்பூர்)தமிழ் (மலேஷியா)తెలుగుಕನ್ನಡമലയാളംසිංහලไทยລາວქართულადአማርኛខ្មែរ中文（中国）中文（台灣）中文（香港）日本語한국어"
6: "DocumentFrom templateSpreadsheetPresentationFormDrawing"
7: "Microsoft Word (.docx)Microsoft Word (.doc)OpenDocument Format (.odt)Rich Text Format (.rtf)PDF Document (.pdf)Plain Text (.txt)Web Page (.html, zipped)EPUB Publication (.epub)"
8: "BarColumnLinePieFrom Sheets"
 */
