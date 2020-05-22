Steps to implement the Menu List dialog
1.	Create a new document from Google Drive and give it public permissions.
2.	Go to Tools -> Script Editor and copy-paste the Code.gs & dialog.html from Github.
3.	Make the Project -> Google Cloud Platform.
4.	Create a new Cloud function getDOM() with the below details:
Memory Allocated: 1GiB
Trigger: HTTP
Source Code: Inline editor
Runtime: Node.js 8
5.	Copy-paste index.js (Puppeteer code) and Package.JSON from Github.
6.	Puppeteer gives the function a browser-based environment by generating a headless browser and accessing the active document’s URL to capture the entire JS rendered DOM of the main HTML page of Google Docs.
7.	Deploy the function and see if it’s successful (no crash reported).
8.	Go to Trigger tab and capture the URL generated.
9.	Use this URL in Code.gs to fetch resources using UrlFetchApp API.
10.	Run the onOpen() function as Test as Add-on.
