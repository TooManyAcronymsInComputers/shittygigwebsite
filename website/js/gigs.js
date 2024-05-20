document.addEventListener("DOMContentLoaded", function() {
    const yearSelect = document.getElementById("year-select");
    const monthSelect = document.getElementById("month-select");
    const mainContent = document.querySelector("main");
    const showGigsButton = document.getElementById("show-gigs");
    const gigData = [
        { year: 2022, months: [
            { month: "January", gigs: [{ band: "Bands:1", date: "January 1, 2022", document: "images/band1.png" }] },
            { month: "February", gigs: [{ band: "Bands:2", date: "February 5, 2022", document: "documents/band2_document.png" }] },
            { month: "March", gigs: [{ band: "Bands:3", date: "March 5, 2022", document: "documents/band3_document.png" }] },
            { month: "April", gigs: [{ band: "Bands:4", date: "April 2, 2022", document: "documents/band4_document.png" }] },
            { month: "May", gigs: [{ band: "Bands:5", date: "May 7, 2022", document: "documents/band5_document.png" }] },
            { month: "June", gigs: [{ band: "Bands:6", date: "June 4, 2022", document: "documents/band6_document.png" }] },
            { month: "July", gigs: [{ band: "Bands:7", date: "July 2, 2022", document: "documents/band7_document.png" }] },
            { month: "August", gigs: [{ band: "Bands:8", date: "August 6, 2022", document: "documents/band8_document.png" }] },
            { month: "September", gigs: [{ band: "Bands:9", date: "September 3, 2022", document: "documents/band9_document.png" }] },
            { month: "October", gigs: [{ band: "Bands:10", date: "October 1, 2022", document: "documents/band10_document.png" }] },
            { month: "November", gigs: [{ band: "Bands:11", date: "November 5, 2022", document: "documents/band11_document.png" }] },
            { month: "December", gigs: [{ band: "Bands:12", date: "December 3, 2022", document: "documents/band12_document.png" }] }
        ] },
        { year: 2023, months: [
            { month: "January", gigs: [{ band: "Bands:1", date: "January 1, 2023", document: "documents/band1_document.png" }] },
            { month: "February", gigs: [{ band: "Bands:2", date: "February 5, 2023", document: "documents/band2_document.png" }] },
            { month: "March", gigs: [{ band: "Bands:3", date: "March 5, 2023", document: "documents/band3_document.png" }] },
            { month: "April", gigs: [{ band: "Bands:4", date: "April 2, 2023", document: "documents/band4_document.png" }] },
            { month: "May", gigs: [{ band: "Bands:5", date: "May 7, 2023", document: "documents/band5_document.png" }] },
            { month: "June", gigs: [{ band: "Bands:6", date: "June 4, 2023", document: "documents/band6_document.png" }] },
            { month: "July", gigs: [{ band: "Bands:7", date: "July 2, 2023", document: "documents/band7_document.png" }] },
            { month: "August", gigs: [{ band: "Bands:8", date: "August 6, 2023", document: "documents/band8_document.png" }] },
            { month: "September", gigs: [{ band: "Bands:9", date: "September 3, 2023", document: "documents/band9_document.png" }] },
            { month: "October", gigs: [{ band: "Bands:10", date: "October 1, 2023", document: "documents/band10_document.png" }] },
            { month: "November", gigs: [{ band: "Bands:11", date: "November 5, 2023", document: "documents/band11_document.png" }] },
            { month: "December", gigs: [{ band: "Bands:12", date: "December 3, 2023", document: "documents/band12_document.png" }] }
        ] },
        { year: 2024, months: [
            { month: "January", gigs: [{ band: "Bands:1", date: "January 1, 2024", document: "images/2024/band1.png" }] },
            { month: "February", gigs: [{ band: "Bands:2", date: "February 5, 2023", document: "images/2024/band2.png" }] },
            { month: "March", gigs: [{ band: "Bands:3", date: "March 5, 2023", document: "images/2024/band3.png" }] },
            { month: "April", gigs: [{ band: "Bands:4", date: "April 2, 2023", document: "images/2024/band4.png" }] },
            { month: "May", gigs: [{ band: "Bands:5", date: "May 7, 2023", document: "images/2024/band5.png" }] },
            { month: "June", gigs: [{ band: "Bands:6", date: "June 4, 2023", document: "images/2024/band6.png" }] },
            { month: "July", gigs: [{ band: "Bands:7", date: "July 2, 2023", document: "images/2024/band7.png" }] },
            { month: "August", gigs: [{ band: "Bands:8", date: "August 6, 2023", document: "images/2024/band8.png" }] },
            { month: "September", gigs: [{ band: "Bands:9", date: "September 3, 2023", document: "images/2024/band9.png" }] },
            { month: "October", gigs: [{ band: "Bands:10", date: "October 1, 2023", document: "images/2024/band10.png" }] },
            { month: "November", gigs: [{ band: "Bands:11", date: "November 5, 2023", document: "images/2024/band11.png" }] },
            { month: "December", gigs: [{ band: "Bands:12", date: "December 3, 2023", document: "images/2024/band12.png" }] }
        ] },
        // Add more years as needed
    ];
    gigData.forEach(yearData => {
        const option = document.createElement("option");
        option.value = yearData.year;
        option.textContent = yearData.year;
        yearSelect.appendChild(option);
    });
    showGigsButton.addEventListener("click", function() {
        const selectedYear = parseInt(yearSelect.value);
        const selectedMonth = monthSelect.value;
        const yearData = gigData.find(data => data.year === selectedYear);
        if (yearData) {
            const monthData = yearData.months.find(month => month.month === selectedMonth);
            if (monthData) {
                displayGigs(monthData.gigs);
            } else {
                mainContent.innerHTML = "<p>No gigs found for the selected month.</p>";
            }
        } else {
            mainContent.innerHTML = "<p>No gigs found for the selected year.</p>";
        }
    });

    // Function to display gigs
    function displayGigs(gigs) {
        mainContent.innerHTML = "";
        gigs.forEach(gig => {
            const bandDiv = document.createElement("div");
            bandDiv.classList.add("band");
            const bandImg = document.createElement("img");
            bandImg.src = `images/${gig.band.toLowerCase()}.png`;
            bandImg.alt = gig.band;
            const bandName = document.createElement("h3");
            bandName.textContent = gig.band;
            const gigDate = document.createElement("p");
            gigDate.textContent = `Date: ${gig.date}`;
            
            const documentLink = document.createElement("a");
            documentLink.href = gig.document;
            documentLink.textContent = "mais January 2022";
            documentLink.target = "_blank"; 

            bandDiv.appendChild(bandImg);
            bandDiv.appendChild(bandName);
            bandDiv.appendChild(gigDate);
            bandDiv.appendChild(documentLink);
            
            mainContent.appendChild(bandDiv);
        });
    }
});
