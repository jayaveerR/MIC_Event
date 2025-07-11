document.addEventListener('DOMContentLoaded', function() {
    // Student data
    const studentData = [
  { rollNo: '24H71F0001', name: 'Adivi Rajesh' },
  { rollNo: '24H71F0002', name: 'Akula Manasa' },
  { rollNo: '24H71F0003', name: 'Allamneni Deepthi' },
  { rollNo: '24H71F0004', name: 'Ambati Baby Ramya Sri' },
  { rollNo: '24H71F0005', name: 'Amanat Phani Sri Nikhitha' },
  { rollNo: '24H71F0006', name: 'Amanapareddy Nandini' },
  { rollNo: '24H71F0007', name: 'Annaparla Sai Lakshmi' },
  { rollNo: '24H71F0008', name: 'Appikarla Surya Kiran' },
  { rollNo: '24H71F0009', name: 'Bala Krishna Yadgiri' },
  { rollNo: '24H71F0010', name: 'Batula Nagarjuna' },
  { rollNo: '24H71F0011', name: 'Battula Lingamurala' },
  { rollNo: '24H71F0012', name: 'Bethapudi Nithin Kumar' },
  { rollNo: '24H71F0013', name: 'Boggavarapu V D K Sowmika' },
  { rollNo: '24H71F0014', name: 'Challa Sai Rachana' },
  { rollNo: '24H71F0015', name: 'Cheedella Sindhu' },
  { rollNo: '24H71F0016', name: 'Chegireddy Rangareddy' },
  { rollNo: '24H71F0017', name: 'Chinmayi Anand' },
  { rollNo: '24H71F0018', name: 'Chinmayi Narendra' },
  { rollNo: '24H71F0019', name: 'Chodimella Rajesh' },
  { rollNo: '24H71F0020', name: 'Damerla Vijaya Lakshmi' },
  { rollNo: '24H71F0021', name: 'Dasari Preveen Kumar' },
  { rollNo: '24H71F0022', name: 'Dava Tirumala Manasa' },
  { rollNo: '24H71F0023', name: 'Dendukuri Thamanei' },
  { rollNo: '24H71F0024', name: 'Devanaboina Swathi' },
  { rollNo: '24H71F0025', name: 'Dilsala Anusha' },
  { rollNo: '24H71F0026', name: 'Dubukula Manasa' },
  { rollNo: '24H71F0027', name: 'Dudekula Brahmaiah' },
  { rollNo: '24H71F0028', name: 'Galla Sowjanya' },
  { rollNo: '24H71F0029', name: 'Goripogu Naga Akhila' },
  { rollNo: '24H71F0030', name: 'Gunturu Kavitha' },
  { rollNo: '24H71F0031', name: 'Guttula Meghana Sri' },
  { rollNo: '24H71F0032', name: 'Illendula Jaya Sri Lakshmi' },
  { rollNo: '24H71F0033', name: 'Illipilla Vandana' },
  { rollNo: '24H71F0034', name: 'Janaki Ram Vennaboinna' },
  { rollNo: '24H71F0035', name: 'Kadiyala Jayaprakash' },
  { rollNo: '24H71F0036', name: 'Kakunuri Sravani' },
  { rollNo: '24H71F0037', name: 'Kamsani Lakshmi Parvathi' },
  { rollNo: '24H71F0038', name: 'Kancharla Venkateswarlu' },
  { rollNo: '24H71F0039', name: 'Kanche Anita' },
  { rollNo: '24H71F0040', name: 'Katuri Vani' },
  { rollNo: '24H71F0041', name: 'Kotireti Revathi' },
  { rollNo: '24H71F0042', name: 'Kotghundala Navya Sree' },
  { rollNo: '24H71F0043', name: 'Kuchupole Triveni' },
  { rollNo: '24H71F0044', name: 'Kurakala Sri Divya Jyothi' },
  { rollNo: '24H71F0045', name: 'Lanke Sujatha' },
  { rollNo: '24H71F0046', name: 'Lanka Venkata Ramya' },
  { rollNo: '24H71F0047', name: 'Machavarapu Lavanya' },
  { rollNo: '24H71F0048', name: 'Maheswari Tejavath' },
  { rollNo: '24H71F0049', name: 'Mahammad Johariah' },
  { rollNo: '24H71F0050', name: 'Malladi Sadiq' },
  { rollNo: '24H71F0051', name: 'Mamidala Jagadeesh Sumalath' },
  { rollNo: '24H71F0052', name: 'Mandapati Raja Sekhar' },
  { rollNo: '24H71F0053', name: 'Mathangi Rithika' },
  { rollNo: '24H71F0054', name: 'Mettu Sha Vankar Reddy' },
  { rollNo: '24H71F0055', name: 'Mettu Vinod' },
  { rollNo: '24H71F0056', name: 'Muthavarapu Prudhvi' },
  { rollNo: '24H71F0057', name: 'Musthyan Gopi Sai' },
  { rollNo: '24H71F0058', name: 'Mutva Siva Narayana' },
  { rollNo: '24H71F0059', name: 'N Suvankha Raju' },
  { rollNo: '24H71F0060', name: 'Naidu Mamata' },
  { rollNo: '24H71F0061', name: 'Nakka Sivaji' },
  { rollNo: '24H71F0062', name: 'Nalamalapu Lokesh Babu' },
  { rollNo: '24H71F0063', name: 'Nall Ravi' },
  { rollNo: '24H71F0064', name: 'Onamalla Hemalatha' },
  { rollNo: '24H71F0065', name: 'Peddi Ramya' },
  { rollNo: '24H71F0066', name: 'Paladugu Chandrasekhar' },
  { rollNo: '24H71F0067', name: 'Paramanth Naga Pavani' },
  { rollNo: '24H71F0068', name: 'Pandi Komal' },
  { rollNo: '24H71F0069', name: 'Papolu Durga Vara Prasad' },
  { rollNo: '24H71F0070', name: 'Parepalli Madhuri' },
  { rollNo: '24H71F0071', name: 'Parimi Moshe' },
  { rollNo: '24H71F0072', name: 'Pasam Anusha' },
  { rollNo: '24H71F0073', name: 'Patan Imran Khan' },
  { rollNo: '24H71F0074', name: 'Pedapudi Madhuri' },
  { rollNo: '24H71F0075', name: 'Polavarapu Sowmya' },
  { rollNo: '24H71F0076', name: 'Ponugumati Nirmal Kumar' },
  { rollNo: '24H71F0077', name: 'Pratipati Devi Vara Prasad' },
  { rollNo: '24H71F0078', name: 'Pushadapu Dileep' },
  { rollNo: '24H71F0079', name: 'Rachabanti Anitha' },
  { rollNo: '24H71F0080', name: 'Ramanadham Jayaveer' },
  { rollNo: '24H71F0081', name: 'Rayapureddy Maheswara Reddy' },
  { rollNo: '24H71F0082', name: 'Reddem Pallavi' },
  { rollNo: '24H71F0083', name: 'Revanth Sai Kumar Thumati' },
  { rollNo: '24H71F0084', name: 'Sayyad Hasem' },
  { rollNo: '24H71F0085', name: 'Shaik Abdul Fayaz Ahmad' },
  { rollNo: '24H71F0086', name: 'Shaik Jasmine' },
  { rollNo: '24H71F0087', name: 'Shaik Moulla' },
  { rollNo: '24H71F0088', name: 'Shaik Nafisa' },
  { rollNo: '24H71F0089', name: 'Shaik Revanna' },
  { rollNo: '24H71F0090', name: 'Shaik Yasmeen' },
  { rollNo: '24H71F0091', name: 'Sirigiri Pravalika' },
  { rollNo: '24H71F0092', name: 'Srivarathi Girish' },
  { rollNo: '24H71F0093', name: 'Tamminisetti Bhavani' },
  { rollNo: '24H71F0094', name: 'Tangirala Kareseshma' },
  { rollNo: '24H71F0095', name: 'Tanuri Nagamani' },
  { rollNo: '24H71F0096', name: 'Thamuri Madhavi' },
  { rollNo: '24H71F0097', name: 'Tharuni Hemanth' },
  { rollNo: '24H71F0098', name: 'Tungala Dharani' },
  { rollNo: '24H71F0099', name: 'Ummanaboina Vijaya Bhargavi' },
  { rollNo: '24H71F00A0', name: 'Velpuri Kumari' },
  { rollNo: '24H71F00A1', name: 'Vemula Akhil' },
  { rollNo: '24H71F00A2', name: 'Vemula Ganesh' },
  { rollNo: '24H71F00A3', name: 'Vemula Akash' },
  { rollNo: '24H71F00A4', name: 'Varagorla Akhil' },
  { rollNo: '24H71F00A5', name: 'Yarramala Anusha' },
  { rollNo: '24H71F00A6', name: 'Kalavakuntla Venkateswararao' },
  { rollNo: '24H71F00A7', name: 'Nazeena' },
  { rollNo: '24H71F00A8', name: 'T. Kalpana' },
  { rollNo: '24H71F00A9', name: 'Aravind' },
  { rollNo: '24H71F00B0', name: 'Chaitanya' }
];

    

    // DOM elements
    const itemNameInput = document.getElementById('itemName');
    const itemAmountInput = document.getElementById('itemAmount');
    const addItemBtn = document.getElementById('addItem');
    const itemTableBody = document.getElementById('itemTableBody');
    const totalAmountElement = document.getElementById('totalAmount');
    const searchBox = document.getElementById('searchBox');
    const showHistoryBtn = document.getElementById('showHistory');
    const clearHistoryBtn = document.getElementById('clearHistory');
    const clearAllBtn = document.getElementById('clearAll');
    const saveDataBtn = document.getElementById('saveData');
    const restoreDataBtn = document.getElementById('restoreData');
    const downloadExcelBtn = document.getElementById('downloadExcel');
    const historyContainer = document.getElementById('historyContainer');
    const historyList = document.getElementById('historyList');
    const showAllBtn = document.getElementById('showAll');
    const showPhonePayBtn = document.getElementById('showPhonePay');
    const showCashBtn = document.getElementById('showCash');

    // Variables
    let items = [];
    let historyItems = JSON.parse(localStorage.getItem('moneyEventHistory')) || [];
    let currentFilter = 'all'; // 'all', 'cash', 'phonepay'

    // Initialize the app
    function init() {
        loadItems();
        renderTable();
        updateTotalAmount();
        renderHistory();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        addItemBtn.addEventListener('click', addItem);
        itemNameInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addItem();
        });
        searchBox.addEventListener('input', filterItems);
        showHistoryBtn.addEventListener('click', toggleHistory);
        clearHistoryBtn.addEventListener('click', clearHistory);
        clearAllBtn.addEventListener('click', clearAll);
        saveDataBtn.addEventListener('click', saveData);
        restoreDataBtn.addEventListener('click', restoreData);
        downloadExcelBtn.addEventListener('click', exportToExcel);
        showAllBtn.addEventListener('click', () => setFilter('all'));
        showPhonePayBtn.addEventListener('click', () => setFilter('phonepay'));
        showCashBtn.addEventListener('click', () => setFilter('cash'));
    }

    // Set filter type
    function setFilter(type) {
        currentFilter = type;
        renderTable();
        
        // Update button states
        showAllBtn.classList.remove('active');
        showPhonePayBtn.classList.remove('active');
        showCashBtn.classList.remove('active');
        
        if (type === 'all') showAllBtn.classList.add('active');
        if (type === 'phonepay') showPhonePayBtn.classList.add('active');
        if (type === 'cash') showCashBtn.classList.add('active');
    }

    // Add item to the list
    function addItem() {
        const rollNo = itemNameInput.value.trim();
        if (!rollNo) return;

        // Find student by roll no
        const student = studentData.find(s => s.rollNo.toLowerCase() === rollNo.toLowerCase());
        if (!student) {
            alert('Student not found with this Roll No');
            return;
        }

        // Check if already added
        if (items.some(item => item.rollNo === student.rollNo)) {
            alert('This student is already added');
            return;
        }

        const amount = parseFloat(itemAmountInput.value) || 0;
        const newItem = {
            id: Date.now(),
            rollNo: student.rollNo,
            name: student.name,
            amount: amount,
            payment: 'pending' // 'cash', 'phonepay', 'pending'
        };

        items.push(newItem);
        renderTable();
        updateTotalAmount();
        itemNameInput.value = '';
        itemNameInput.focus();
        saveItems();
    }

    // Render the table
    function renderTable() {
        itemTableBody.innerHTML = '';
        
        // Filter items based on current filter
        const filteredItems = items.filter(item => {
            if (currentFilter === 'all') return true;
            return item.payment === currentFilter;
        });
        
        filteredItems.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.rollNo}</td>
                <td>${item.name}</td>
                <td>₹${item.amount.toFixed(2)}</td>
                <td>
                    <span class="payment-status ${item.payment === 'cash' ? 'payment-cash' : 
                                              item.payment === 'phonepay' ? 'payment-phonepay' : 
                                              'payment-pending'}">
                        ${item.payment === 'cash' ? 'CASH' : 
                        item.payment === 'phonepay' ? 'PHONEPAY' : 'PENDING'}
                    </span>
                </td>
                <td>
                    <div class="action-btns">
                        <button class="action-btn btn-cash" data-id="${item.id}">Cash</button>
                        <button class="action-btn btn-phonepay" data-id="${item.id}">PhonePay</button>
                        <button class="action-btn delete-btn" data-id="${item.id}">Delete</button>
                    </div>
                </td>
            `;
            itemTableBody.appendChild(row);
        });

        // Add event listeners to action buttons
        document.querySelectorAll('.btn-cash').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                updatePaymentStatus(id, 'cash');
            });
        });

        document.querySelectorAll('.btn-phonepay').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                updatePaymentStatus(id, 'phonepay');
            });
        });

        document.querySelectorAll('.delete-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const id = parseInt(this.getAttribute('data-id'));
                deleteItem(id);
            });
        });
    }

    // Update payment status
    function updatePaymentStatus(id, status) {
        const itemIndex = items.findIndex(item => item.id === id);
        if (itemIndex !== -1) {
            items[itemIndex].payment = status;
            renderTable();
            saveItems();
        }
    }

    // Delete item
    function deleteItem(id) {
        items = items.filter(item => item.id !== id);
        renderTable();
        updateTotalAmount();
        saveItems();
    }

    // Update total amount
    function updateTotalAmount() {
        const total = items.reduce((sum, item) => sum + item.amount, 0);
        totalAmountElement.textContent = `₹${total.toFixed(2)}`;
        totalAmountElement.classList.add('amount-move');
        setTimeout(() => {
            totalAmountElement.classList.remove('amount-move');
        }, 300);
    }

    // Filter items based on search
    function filterItems() {
        const searchTerm = searchBox.value.toLowerCase();
        const rows = itemTableBody.querySelectorAll('tr');
        
        rows.forEach(row => {
            const rollNo = row.cells[1].textContent.toLowerCase();
            const name = row.cells[2].textContent.toLowerCase();
            if (rollNo.includes(searchTerm) || name.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    // Toggle history visibility
    function toggleHistory() {
        historyContainer.style.display = historyContainer.style.display === 'none' ? 'block' : 'none';
    }

    // Render history
    function renderHistory() {
        historyList.innerHTML = '';
        if (historyItems.length === 0) {
            historyList.innerHTML = '<p>No history available</p>';
            return;
        }

        historyItems.forEach((history, index) => {
            const historyItem = document.createElement('div');
            historyItem.className = 'history-item';
            historyItem.innerHTML = `
                <div>
                    <strong>${new Date(history.timestamp).toLocaleString()}</strong>
                    <span>${history.items.length} items</span>
                </div>
                <div>
                    <strong>₹${history.totalAmount.toFixed(2)}</strong>
                </div>
            `;
            historyList.appendChild(historyItem);
        });
    }

    // Clear history
    function clearHistory() {
        if (confirm('Are you sure you want to clear history? This cannot be undone.')) {
            historyItems = [];
            localStorage.setItem('moneyEventHistory', JSON.stringify(historyItems));
            renderHistory();
        }
    }

    // Clear all current items
    function clearAll() {
        if (confirm('Are you sure you want to clear all current items?')) {
            items = [];
            renderTable();
            updateTotalAmount();
            saveItems();
        }
    }

    // Save data to history
    function saveData() {
        if (items.length === 0) {
            alert('No items to save');
            return;
        }

        const totalAmount = items.reduce((sum, item) => sum + item.amount, 0);
        const historyEntry = {
            timestamp: new Date().toISOString(),
            items: [...items],
            totalAmount: totalAmount
        };

        historyItems.unshift(historyEntry);
        if (historyItems.length > 10) {
            historyItems = historyItems.slice(0, 10);
        }

        localStorage.setItem('moneyEventHistory', JSON.stringify(historyItems));
        renderHistory();
        alert('Data saved successfully');
    }

    // Restore data from history
    function restoreData() {
        if (historyItems.length === 0) {
            alert('No history data available to restore');
            return;
        }

        if (confirm('Restore the most recent saved data? Current items will be replaced.')) {
            const mostRecent = historyItems[0];
            items = [...mostRecent.items];
            renderTable();
            updateTotalAmount();
            saveItems();
            alert('Data restored successfully');
        }
    }

    // Export to Excel
    function exportToExcel() {
        if (items.length === 0) {
            alert('No data to export');
            return;
        }

        // Separate cash and phonepay items
        const cashItems = items.filter(item => item.payment === 'cash');
        const phonepayItems = items.filter(item => item.payment === 'phonepay');
        const pendingItems = items.filter(item => item.payment === 'pending');

        // Create CSV content
        let csv = 'Payment Report\n\n';
        
        // Cash Payments
        csv += 'CASH PAYMENTS\n';
        csv += 'S.No,Roll No,Name,Amount\n';
        cashItems.forEach((item, index) => {
            csv += `${index + 1},${item.rollNo},"${item.name}",${item.amount}\n`;
        });
        const cashTotal = cashItems.reduce((sum, item) => sum + item.amount, 0);
        csv += `Total,,,${cashTotal}\n\n`;
        
        // PhonePay Payments
        csv += 'PHONEPAY PAYMENTS\n';
        csv += 'S.No,Roll No,Name,Amount\n';
        phonepayItems.forEach((item, index) => {
            csv += `${index + 1},${item.rollNo},"${item.name}",${item.amount}\n`;
        });
        const phonepayTotal = phonepayItems.reduce((sum, item) => sum + item.amount, 0);
        csv += `Total,,,${phonepayTotal}\n\n`;
        
        // Pending Payments
        csv += 'PENDING PAYMENTS\n';
        csv += 'S.No,Roll No,Name,Amount\n';
        pendingItems.forEach((item, index) => {
            csv += `${index + 1},${item.rollNo},"${item.name}",${item.amount}\n`;
        });
        const pendingTotal = pendingItems.reduce((sum, item) => sum + item.amount, 0);
        csv += `Total,,,${pendingTotal}\n\n`;
        
        // Grand Total
        const grandTotal = items.reduce((sum, item) => sum + item.amount, 0);
        csv += `GRAND TOTAL,,,${grandTotal}`;

        // Create download link
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.setAttribute('href', url);
        link.setAttribute('download', `payment_report_${new Date().toISOString().slice(0, 10)}.csv`);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Save items to localStorage
    function saveItems() {
        localStorage.setItem('moneyEventItems', JSON.stringify(items));
    }

    // Load items from localStorage
    function loadItems() {
        const savedItems = localStorage.getItem('moneyEventItems');
        if (savedItems) {
            items = JSON.parse(savedItems);
        }
    }

    // Initialize the app
    init();
    setFilter('all'); // Start with showing all items
});

document.addEventListener('DOMContentLoaded', function() {
    // Student data
    const studentData = [
        { rollNo: '24H71F0061', name: 'Nakka Sivaji' },
        { rollNo: '24H71F0062', name: 'Nalamalapu Lokesh Babu' },
        // ... (other students)
        { rollNo: '24H71F00A6', name: 'Kalavakuntla Venkateswararao' }
    ];

    // DOM elements
    const rollNoPrefixInput = document.getElementById('rollNoPrefix');
    const rollNoLastNumberInput = document.getElementById('rollNoLastNumber');
    const searchStudentBtn = document.getElementById('searchStudent');
    const itemNameInput = document.getElementById('itemName');
    const itemAmountInput = document.getElementById('itemAmount');
    const addItemBtn = document.getElementById('addItem');
    const itemTableBody = document.getElementById('itemTableBody');
    const totalAmountElement = document.getElementById('totalAmount');
    // ... (other DOM elements)

    // Variables
    let items = [];
    let historyItems = JSON.parse(localStorage.getItem('moneyEventHistory')) || [];
    let currentFilter = 'all'; // 'all', 'cash', 'phonepay'

    // Initialize the app
    function init() {
        loadItems();
        renderTable();
        updateTotalAmount();
        renderHistory();
        setupEventListeners();
    }

    // Set up event listeners
    function setupEventListeners() {
        addItemBtn.addEventListener('click', addItem);
        searchStudentBtn.addEventListener('click', searchStudent);
        // ... (other event listeners)
    }

    // Search for a student by roll number
    function searchStudent() {
        const rollNoPrefix = rollNoPrefixInput.value.trim();
        const rollNoLastNumber = rollNoLastNumberInput.value.trim();

        if (!rollNoPrefix || !rollNoLastNumber) {
            alert('Please enter both Roll No Prefix and Last Number');
            return;
        }

        const fullRollNo = `${rollNoPrefix}${rollNoLastNumber}`;
        const student = studentData.find(s => s.rollNo === fullRollNo);

        if (student) {
            itemNameInput.value = student.name; // Set the name input to the found student's name
        } else {
            alert('Student not found with this Roll No');
        }
    }

    // Add item to the list
    function addItem() {
        const rollNo = itemNameInput.value.trim();
        if (!rollNo) return;

        // Find student by roll no
        const student = studentData.find(s => s.name.toLowerCase() === rollNo.toLowerCase());
        if (!student) {
            alert('Student not found with this Roll No');
            return;
        }

        // Check if already added
        if (items.some(item => item.rollNo === student.rollNo)) {
            alert('This student is already added');
            return;
        }

        const amount = parseFloat(itemAmountInput.value) || 0;
        const newItem = {
            id: Date.now(),
            rollNo: student.rollNo,
            name: student.name,
            amount: amount,
            payment: 'pending' // 'cash', 'phonepay', 'pending'
        };

        items.push(newItem);
        renderTable();
        updateTotalAmount();
        itemNameInput.value = '';
        itemNameInput.focus();
        saveItems();
    }

    // ... (rest of your existing code)

    // Initialize the app
    init();
    setFilter('all'); // Start with showing all items
});


        // Filter buttons functionality
        document.getElementById('showAll').addEventListener('click', function() {
            console.log('Show All clicked');
            // Add your filter logic here
        });
        
        document.getElementById('showPhonePay').addEventListener('click', function() {
            console.log('PhonePay clicked');
            // Add your filter logic here
        });
        
        document.getElementById('showCash').addEventListener('click', function() {
            console.log('Cash clicked');
            // Add your filter logic here
        });
        
        // Copy functionality
        document.getElementById('copyButton').addEventListener('click', function() {
            const code = document.getElementById('copyTocopy').textContent;
            navigator.clipboard.writeText(code).then(function() {
                const copyBtn = document.getElementById('copyButton');
                copyBtn.textContent = 'Copied!';
                setTimeout(function() {
                    copyBtn.textContent = 'Copy';
                }, 2000);
            }).catch(function(err) {
                console.error('Could not copy text: ', err);
            });
        });

