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
  document.getElementById('sellerForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form submission
  
    // Allowed districts and their pin codes
    const districtPinMapping = {
      'Trichy': [620001, 620002, 620003, 620004, 620005],
      'Thanjavur': [613001, 613002, 613003, 613004],
      'Karur': [639001, 639002, 639003],
      'Pudukkottai': [622001, 622002, 622003],
      'Ariyalur': [621704, 621705, 621701],
      'Perambalur': [621212, 621113, 621108],
      'Namakkal': [637001, 637002, 637003],
      'Dindigul': [624001, 624002, 624003]
    };
  
    // Get inputs
    const districtInput = document.getElementById('district').value.trim();
    const pincodeInput = parseInt(document.getElementById('pincode').value.trim(), 10);
    const statusMessage = document.getElementById('statusMessage');
  
    // Validate district
    const matchingDistrict = Object.keys(districtPinMapping).find(
      district => district.toLowerCase() === districtInput.toLowerCase()
    );
  
    if (!matchingDistrict) {
      statusMessage.textContent = 'Invalid district. Please enter a district within the allowed areas.';
      statusMessage.className = 'status-message error';
      return;
    }
  
    // Validate pincode for the matched district
    const isPincodeValid = districtPinMapping[matchingDistrict].includes(pincodeInput);
  
    if (isPincodeValid) {
      statusMessage.textContent = `Registration successful! Your district (${matchingDistrict}) and pincode (${pincodeInput}) are valid.`;
      statusMessage.className = 'status-message success';
    } else {
      statusMessage.textContent = `Invalid pincode. The entered pincode (${pincodeInput}) does not match the district (${matchingDistrict}).`;
      statusMessage.className = 'status-message error';
    }
  });
  