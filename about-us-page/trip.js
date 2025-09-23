$(document).ready(function () {
    const suggestionsSection = $('#suggestionsSection');
    const suggestionsList = $('#suggestionsList');
    const planTripButton = $('#planTrip');
    const tripDetailsSection = $('#tripDetailsSection');
    const tripDetailsDiv = $('#tripDetails');
    const sendEmailButton = $('#sendEmail');
    const emailStatusDiv = $('#emailStatus');
    const itineraryForm = $('#itineraryForm');
  
    (function () {
      emailjs.init("Brjccfg_X7DsVZbDa"); // Ensure this is your valid EmailJS public key
    })();
  
    const searchInput = $('#searchInput');
    const searchResults = $('#searchResults');
    const destinationField = $('#destination');
  
    let selectionCount = JSON.parse(localStorage.getItem('selectionCount')) || {};
    let recentSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
  
    function getTrendingDestinations() {
      const sorted = Object.entries(selectionCount)
        .sort((a, b) => b[1] - a[1])
        .map(entry => entry[0]);
      return sorted.slice(0, 5);
    }
  
    function renderSearchResults(query = '') {
      searchResults.hide().empty();
      let results = [];
  
      // Example static list for demo purposes
      const staticDestinations = ['Goa', 'Kerala', 'Rajasthan', 'Manali', 'Agra'];
  
      if (query) {
        results = staticDestinations.filter(dest => dest.toLowerCase().includes(query.toLowerCase()));
      }
  
      if (results.length > 0) {
        results.forEach(dest => {
          const highlighted = dest.replace(new RegExp(query, 'gi'), match => `<span class="highlight">${match}</span>`);
          searchResults.append(`<div class="search-result-item" data-dest="${dest}">${highlighted}</div>`);
        });
      } else if (query) {
        searchResults.append('<div class="search-result-item no-results">No destinations found</div>');
      } else {
        if (recentSearches.length > 0) {
          searchResults.append('<div class="search-result-item"><strong>Recent Searches</strong></div>');
          recentSearches.forEach(dest => {
            searchResults.append(`<div class="search-result-item" data-dest="${dest}">${dest}</div>`);
          });
          searchResults.append('<div class="search-result-item clear-history text-danger" style="cursor:pointer">Clear Search History</div>');
        }
        const trending = getTrendingDestinations();
        if (trending.length > 0) {
          searchResults.append('<div class="search-result-item"><strong>Trending Destinations</strong></div>');
          trending.forEach(dest => {
            searchResults.append(`<div class="search-result-item" data-dest="${dest}">${dest}</div>`);
          });
        }
      }
  
      searchResults.fadeIn(200).addClass('active');
    }
  
    searchInput.on('focus input', function () {
      const query = $(this).val().trim();
      renderSearchResults(query);
    });
  
    searchResults.on('click', '.search-result-item', function () {
      const selectedDest = $(this).data('dest');
  
      if (selectedDest) {
        destinationField.val(selectedDest);
        searchResults.fadeOut(150).removeClass('active');
  
        recentSearches = recentSearches.filter(dest => dest !== selectedDest);
        recentSearches.unshift(selectedDest);
        if (recentSearches.length > 5) recentSearches.pop();
        localStorage.setItem('recentSearches', JSON.stringify(recentSearches));
  
        if (!selectionCount[selectedDest]) {
          selectionCount[selectedDest] = 1;
        } else {
          selectionCount[selectedDest]++;
        }
        localStorage.setItem('selectionCount', JSON.stringify(selectionCount));
      }
    });
  
    searchResults.on('click', '.clear-history', function () {
      localStorage.removeItem('recentSearches');
      recentSearches = [];
      renderSearchResults();
    });
  
    $(document).on('click', function (e) {
      if (!$(e.target).closest('#searchInput, #searchResults').length) {
        searchResults.fadeOut(150).removeClass('active');
      }
    });
  
    // ===== Get AI Suggestions =====
    $('#getSuggestions').on('click', function () {
      const destination = $('#destination').val().trim();
      const duration = $('#duration').val().trim();
      const interests = $('#interests').val().trim();
  
      if (!destination || !duration || !interests) {
        alert('Please fill in all the fields.');
        return;
      }
  
      suggestionsList.empty();
      suggestionsSection.show();
  
      // Replace with real API key and server setup (this should be proxied)
      fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY'
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{
            role: "user",
            content: `Suggest top travel experiences in ${destination} for ${duration} days. Interests: ${interests}.`
          }],
          max_tokens: 500
        })
      })
      .then(response => response.json())
      .then(data => {
        const aiResponse = data.choices[0].message.content;
        suggestionsList.html(`<li class="list-group-item">${aiResponse.replace(/\n/g, '<br>')}</li>`);
        suggestionsSection.show();
      })
      .catch(error => {
        console.error("OpenAI error:", error);
        suggestionsList.html('<li class="list-group-item text-danger">Failed to get AI suggestions.</li>');
      });
    });
  
    // ===== Plan Trip Itinerary =====
    planTripButton.on('click', function () {
      const destination = $('#destination').val().trim();
      const duration = parseInt($('#duration').val().trim(), 10);
  
      if (!destination || isNaN(duration)) {
        alert('Please provide valid destination and duration.');
        return;
      }
  
      tripDetailsDiv.html(`<p><strong>Destination:</strong> ${destination}</p>`);
      tripDetailsDiv.append(`<p><strong>Duration:</strong> ${duration} days</p>`);
  
      const sampleActivities = [
        'Visit popular historical landmarks',
        'Try local cuisine and street food',
        'Enjoy nature walks or wildlife safaris',
        'Take part in cultural workshops or dance shows',
        'Relax with a spa or wellness retreat'
      ];
  
      let itineraryHTML = '<ol>';
      for (let i = 0; i < duration; i++) {
        itineraryHTML += `<li>Day ${i + 1}: ${sampleActivities[i % sampleActivities.length]}</li>`;
      }
      itineraryHTML += '</ol>';
  
      tripDetailsDiv.append(itineraryHTML);
      tripDetailsSection.show();
    });
  
    // ===== Send Email =====
    sendEmailButton.on('click', function () {
      const userEmail = $('#userEmail').val().trim();
      if (!userEmail) {
        emailStatusDiv.text('Please enter your email.');
        return;
      }
  
      const emailContent = tripDetailsDiv.html();
  
      emailjs.send("service_6ov13cq", "template_i4qsdim", {
        to_email: userEmail,
        message: emailContent
      }).then(() => {
        emailStatusDiv.text('Trip details sent to your email!');
      }).catch(error => {
        emailStatusDiv.text('Failed to send email. Please try again later.');
        console.error('EmailJS error:', error);
      });
    });
  
    // ===== PDF Download and Print =====
    $('#downloadPDF').on('click', function () {
      const element = document.getElementById('tripDetails');
      const opt = {
        margin: 0.5,
        filename: 'Trip_Itinerary.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
  
      html2pdf().set(opt).from(element).save();
    });
  
    $('#printItinerary').on('click', function () {
      const printWindow = window.open('', '_blank');
      printWindow.document.write(`
        <html>
        <head><title>Print Itinerary</title></head>
        <body>${$('#tripDetails').html()}</body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    });
  });
  