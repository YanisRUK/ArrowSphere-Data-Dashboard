<p align="center">
    <br />
        <img src="https://github.com/YanisRUK/ArrowSphere-Data-Dashboard/blob/main/DT402LOGO.png" width="400" alt=""/>
    <br />
</p>
<p align="center"><strong style="font-size: 10vw;">DT402A Microsoft Licensing Data Dashboard</strong></p>
<p align="center"><strong style="font-size: 30px;">Dynamic Flask Data Dashboard</strong></p>
<p align="center" style="display: flex; justify-content: center; align-items: center;">
    <a href="https://github.com/YanisRUK/ArrowSphere-Data-Dashboard/stargazers">
        <img src="https://img.shields.io/github/stars/jjjutla/melodot?style=social" alt="GitHub stars"/>
        <span style="margin: 0 10px; color: white; font-size: 14px;"></span>
        </a>
    </span>
</p>

---

### 🤔 What is ArrowSphere?
ArrowSphere is a program that myself and others within Ricoh UK utilise for quoting and ordering our Microsoft CSP Licensing; whether that's a Microsoft 365 E3 or just an add-in to a service you may already have (such as upgrading Entra ID P1 to P2), we do all Microsoft CSP related work, through this web app. 

### 📊 Features of the Dashboard
- The dashboard is consists of a dynamic bar chart which has been programmed using JavaScript, the colours with CSS, website layout with HTML, and so on. The dashboard does also have an API feature, however it is not functional and only there for demonstrative purposes. The dynamic piece of the dashboard is that you can alter the appearance of the bar chart by clicking through choice buttons, depending on what billing you would like on your licensing/ user. 

- The API is from ArrowSphere, and it's purpose was to pull the pricing of Microsoft licenses live from just the API connection to the website / data dashboard.

### 👨‍💻 Development Roadmap

- [ ] Chose python with Flask for the backend and API functionality
- [ ] Choce HTML, CSS, and JavaScript (with Chart.js) for the frontend 
- [ ] Outlined the requirements for dynamic interactivity to work
- [ ] Created a project structure (including folders for templates and static assets) 
- [ ] Implement api/pricing to pull pricing data from ArrowSphere
- [ ] Incorporated a dummy dataset for a fallback to ensure functionality during development or any failures
- [ ] Developed a clean and consistent HTML structure + intergrated a permanent header at the top 
- [ ] Added a canvas element for rendering the dynamic aspect of the chart
- [ ] Embedded chart.js to display the bar chart
- [ ] Created interactive checkboxes to allow users to select and compare multiple pricing options at the same time
- [ ] Had to troubleshoot plenty of errors due to my incorrect file paths and project structure, etc
- [ ] Attempted to develop a GitHub style heatmap and failed (terribly 😂)
- [ ] Working on fixing the problems with the ArrowSphere API 

---

### 📚 Publications & Resources used 
- **Grinberg, M. (2018)**
Flask Web Development: Developing Web Applications with Python. Sebastopol, CA: O’Reilly Media.
Available at: https://www.oreilly.com/library/view/flask-web-development/9781491991725/ (Accessed: January 2025)
I used this as a great practical resource for understanding how to build web apps with Flask. 

- **Eckerson, W. (2007)**
Performance Dashboards: Measuring, Monitoring, and Managing Your Business. Hoboken, NJ: John Wiley & Sons.
Available at: https://www.wiley.com/en-us/Performance+Dashboards%3A+Measuring%2C+Monitoring%2C+and+Managing+Your+Business-p-9780470176574 (Accessed: February 2025)
Inspired my ideation to use Microsoft CSP licensing as the example for this web app.

- **Soumil Shah (2019)**
Dynamic Flask Data Dashboard Devleopment: Creating charts with Chartist & Flask
Available at: https://www.youtube.com/watch?v=hGSD2BZaVuU (Accessed: January 2025)
This series of videos provided me with more insight into how I could use dynamic features in my dashboard.

- **techlado (2021)**
Grasping graphs: How to add graphs EASILY to your Flask apps!
Available at: https://www.youtube.com/watch?v=E2hytuQvLlE (Accessed: January 2025)
I used this video to understand how to program bar charts into my own dashboard. 
