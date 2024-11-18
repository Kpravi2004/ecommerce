document.getElementById('sellerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Allowed districts near Trichy
    const allowedDistricts = ['Trichy', 'Tiruchirapalli', 'Thanjavur', 'Karur', 'Pudukkottai', 'Ariyalur', 'Perambalur', 'Namakkal', 'Dindigul'];
    
    // Get district input and clean it
    const districtInput = document.getElementById('district').value.trim().toLowerCase();
    const statusMessage = document.getElementById('statusMessage');
  
    // Check if the district matches any allowed district
    const isAllowed = allowedDistricts.some(district => district.toLowerCase() === districtInput);
  
    if (isAllowed) {
      statusMessage.textContent = 'Your registration is successful. You are eligible to sell on our platform!';
      statusMessage.className = 'status-message success';
    } else {
      statusMessage.textContent = 'Registration failed. Your district is not within the permitted area.';
      statusMessage.className = 'status-message error';
    }
  });
  