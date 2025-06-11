


        
function toggleAbout() {
  var aboutDiv = document.querySelector('.about-text');
  if (aboutDiv.style.display === 'none' || aboutDiv.style.display === '') {
    aboutDiv.style.display = 'block';
    aboutDiv.scrollIntoView({behavior: 'smooth'});
  } else {
    aboutDiv.style.display = 'none';
  }
}





        // PDF Resume Functions
        function openResume() {
            const modal = document.getElementById('pdfModal');
            const viewer = document.getElementById('pdfViewer');
            
           // Replace 'assets/Neelabh_Shukla_Resume.pdf' with your actual PDF path
viewer.src = "c:/web/Neelabh Shukla_Resume.pdf"; // Update this path to your PDF file
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }

        function closeResume() {
            const modal = document.getElementById('pdfModal');
            const viewer = document.getElementById('pdfViewer');
            
            modal.classList.remove('active');
            viewer.src = ''; // Clear the PDF to stop loading
            document.body.style.overflow = 'auto'; // Restore scrolling
        }

        // Close modal when clicking outside the PDF container
        document.getElementById('pdfModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeResume();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeResume();
            }
        });

        

const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('show');
});