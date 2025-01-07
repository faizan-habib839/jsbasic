function calculateIBM() {
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;

    
    if (!height || !weight || height <= 0 || weight <= 0) {
        document.getElementById('result').innerText = "Please enter valid height and weight.";
        return;
    }

    
    const heightInMeters = height / 100; 
    const ibm = (weight / (heightInMeters ** 2)).toFixed(2);

    
    document.getElementById('result').innerText = `Your IBM (BMI) is: ${ibm}`;
}
