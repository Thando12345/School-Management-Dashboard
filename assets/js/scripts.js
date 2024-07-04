// Example AJAX call to get school data (you can customize this)
$(document).ready(function() {
    // Example AJAX call to get school data
    $.ajax({
        url: 'path_to_your_api_endpoint',  // Replace with actual API endpoint
        method: 'GET',
        success: function(data) {
            console.log(data);
            // Update your dashboard with the data
            updateSchoolsList(data);
        },
        error: function(error) {
            console.log(error);
        }
    });
});

// Function to update the list of schools in the admin dashboard
function updateSchoolsList(data) {
    var schoolsList = $('#schools-list');  // Assuming you have a <div id="schools-list"></div> in admin.html
    schoolsList.empty();  // Clear existing content

    data.forEach(function(school) {
        schoolsList.append(
            '<div class="list-group-item">' +
            '<h5>' + school.name + '</h5>' +
            '<p>' + school.city + ', ' + school.province + '</p>' +
            '<p>' + school.address + '</p>' +
            '</div>'
        );
    });
}
