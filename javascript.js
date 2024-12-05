// Function to toggle the visibility of the project list
function toggleProjects() {
    const projectList = document.getElementById('projectList');
    if (projectList.style.display === 'none' || projectList.style.display === '') {
      projectList.style.display = 'block';
    } else {
      projectList.style.display = 'none';
    }
  }
  
  // Function to toggle the visibility of individual project folders
  function toggleFolder(folderId) {
    const folderContents = document.getElementById(folderId);
    if (folderContents.style.display === 'none' || folderContents.style.display === '') {
      folderContents.style.display = 'block';
    } else {
      folderContents.style.display = 'none';
    }
  }
  