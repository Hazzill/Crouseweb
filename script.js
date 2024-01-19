// script.js
function superThank() {
  alert('SuperThank button clicked!');
}

// ตัวอย่างการใช้ JavaScript เพื่ออัพเดทข้อมูล User Profile
function updateProfile() {
  const usernameElement = document.getElementById('username');
  const userProfileElement = document.getElementById('userProfile');

  // สมมติว่าคุณได้รับข้อมูลผู้ใช้จากแหล่งข้อมูลอื่น ๆ
  const userData = {
    username: 'NewUsername',
    avatarUrl: 'new-avatar.jpg',
  };

  // อัพเดทข้อมูล User Profile
  usernameElement.innerText = userData.username;
  userProfileElement.querySelector('img').src = userData.avatarUrl;
}

// เรียกใช้ฟังก์ชัน updateProfile เมื่อหน้าเว็บโหลด
window.onload = updateProfile;
