// Down load Exal File
$(document).ready(function () {
  $("#exportButton").click(function () {
    // Sample data
    console.log("asdasd");
    var data = [
      [
        "Product_Name",
        "SKU",
        "Category",
        "Stock",
        "Price",
        "Status",
        "Add_Date",
      ],
      [
        "Handmade Pouch",
        302012,
        "Bag & Pouch",
        10,
        121,
        "low stock",
        "22 Dec 2024",
      ],
      ["Smartwatch E2", 302011, "Watch", 15, 225, "Draft", "15 Jun 2024"],
      [
        "Headphone G1 Pro",
        302002,
        "PC Desktop	",
        300,
        720,
        "Published",
        "24 Jan 2024",
      ],
    ];

    // Create a new workbook
    var workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    var worksheet = XLSX.utils.aoa_to_sheet(data);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Save workbook as Excel file
    XLSX.writeFile(workbook, "exported_data.xlsx");
  });
});

$(document).ready(function () {
  $("#exportButtonOrder").click(function () {
    // Sample data
    console.log("asdasd");
    var data = [
      [
        "Product_Name",
        "SKU",
        "Category",
        "Stock",
        "Price",
        "Status",
        "Add_Date",
        "QTY",
        "Subtotal",
        "VAT (0%)",
        "Shipping Rate",
        "Grand Total",
      ],
      [
        "Handmade Pouch",
        302012,
        "Bag & Pouch",
        10,
        121,
        "low stock",
        "22 Dec 2024",
        1,
        "121",
        "$0.00",
        "$5.99",
        121,
      ],
      [
        "Smartwatch E2",
        302011,
        "Watch",
        15,
        225,
        "Draft",
        "15 Jun 2024",
        3,
        "675",
        "$0.00",
        "$5.99",
        700,
      ],
      [
        "Headphone G1 Pro",
        302002,
        "PC Desktop	",
        300,
        720,
        "Published",
        "24 Jan 2024",
        4,
        "675",
        "$0.00",
        "$5.99",
        700,
      ],
    ];

    // Create a new workbook
    var workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    var worksheet = XLSX.utils.aoa_to_sheet(data);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Save workbook as Excel file
    XLSX.writeFile(workbook, "exported_data.xlsx");
  });
});
$(document).ready(function () {
  $("#exportButtonCategories").click(function () {
    // Sample data
    console.log("asdasd");
    var data = [
      ["Categories", "Description", "Sales", "Stock", "Added"],
      [
        "Bag & Pouch",
        "Great fashion, great selections, great prices.",
        "15,020",
        "910",
        "29 Dec 2022	",
      ],
      [
        "Watch",
        "Our range of watches are perfect whether you’re looking to upgrade.",
        "4,020",
        "500",
        "29 Dec 2022	",
      ],
      [
        "Smartphone",
        "Our range of watches are perfect whether you’re looking to upgrade.",
        "4,020",
        "500",
        "29 Dec 2022	",
      ],
    ];

    // Create a new workbook
    var workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    var worksheet = XLSX.utils.aoa_to_sheet(data);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Save workbook as Excel file
    XLSX.writeFile(workbook, "exported_data.xlsx");
  });
});

$(document).ready(function () {
  $("#exportButtonInvoice").click(function () {
    // Sample data
    console.log("asdasd");
    var data = [
      [
        "Product_Name",
        "SKU",
        "Category",
        "Stock",
        "Price",
        "Status",
        "Add_Date",
        "QTY",
        "Subtotal",
        "VAT (0%)",
        "Shipping Rate",
        "Grand Total",
        "details",
        "Bill to",
        "Ship to",
        "Invoice ID",
        "Shipment ID",
      ],
      [
        "Handmade Pouch",
        302012,
        "Bag & Pouch",
        10,
        121,
        "low stock",
        "22 Dec 2024",
        1,
        "121",
        "$0.00",
        "$5.99",
        121,
        "4350 Whitetail Lane, Dallas, Texas, 75202 USA+1 (469) 227 9044",
        "Josh Adam",
        "Josh Adam",
        "32011",
        "SHP-2011REG",
      ],
    ];

    // Create a new workbook
    var workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    var worksheet = XLSX.utils.aoa_to_sheet(data);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Save workbook as Excel file
    XLSX.writeFile(workbook, "exported_data.xlsx");
  });
});

$(document).ready(function () {
  $("#exportButtonCustomer").click(function () {
    // Sample data
    console.log("asdasd");
    var data = [
      [
        "Coustomer Name",
        "Coustomer Mail",
        "Phone",
        "Orders",
        "Balance",
        "Created",
        "Status",
      ],
      [
        "John Bushmill",
        "Johnb@mail.com",
        "078 5054 8877",
        124,
        "$121.00",
        "29 Dec 2022	",
        "Blocked",
      ],
      [
        "Laura Prichet",
        "laura_prichet@mail.com",
        "215 302 3376",
        45,
        "$121.00",
        "29 Dec 2022	",
        "Active",
      ],
      [
        "Mohammad Karim",
        "m_karim@mail.com",
        "050 414 8778",
        984,
        "$125.00",
        "21 Oct 2022",
        "Blocked",
      ],
      [
        "Josh Bill",
        "josh_bill@mail.com",
        "216 75 612 706",
        99,
        "$348.00",
        "21 Oct 2022",
        "Blocked",
      ],
      [
        "Linda Blair",
        "lindablair@mail.com",
        "050 414 8778",
        1296,
        "$723.00",
        "10 Aug 2022",
        "Blocked",
      ],
    ];

    // Create a new workbook
    var workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    var worksheet = XLSX.utils.aoa_to_sheet(data);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Save workbook as Excel file
    XLSX.writeFile(workbook, "exported_data.xlsx");
  });
});
$(document).ready(function () {
  $("#exportButtonSaller").click(function () {
    // Sample data
    console.log("asdasd");
    var data = [
      [
        "Saller Name",
        "Saller Mail",
        "Rating",
        "Product",
        "Earning",
        "Balance",
        "Add",
      ],
      [
        "John Bushmill",
        "Johnb@mail.com",
        "4.5",
        124,
        "$1200.00",
        "$986.00",
        "$400",
      ],
      [
        "Laura Prichet",
        "laura_prichet@mail.com",
        "215 302 3376",
        45,
        "$121.00",
        "$100.00",
        "$260	",
      ],
      [
        "Mohammad Karim",
        "m_karim@mail.com",
        "050 414 8778",
        984,
        "$125.00",
        "$1200.00",
        "$350",
      ],
      [
        "Josh Bill",
        "josh_bill@mail.com",
        "216 75 612 706",
        99,
        "$348.00",
        "$1500.00",
        "$200",
      ],
      [
        "Linda Blair",
        "lindablair@mail.com",
        "050 414 8778",
        1296,
        "$723.00",
        "$1000.00",
        "$100",
      ],
    ];

    // Create a new workbook
    var workbook = XLSX.utils.book_new();

    // Convert data array to worksheet
    var worksheet = XLSX.utils.aoa_to_sheet(data);

    // Add worksheet to workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

    // Save workbook as Excel file
    XLSX.writeFile(workbook, "exported_data.xlsx");
  });
});
// Print Bill
$(document).ready(function () {
  $("#contentToPrintxx").click(function () {
    alert("pk");
    var newWindow = window.open("../test.html", "_blank");
    newWindow.onload = function () {
      newWindow.print();
    };
  });
});

// Copt Text In Order Details
function copyEmail() {
  // Get the email address text
  var emailText = document.getElementById("emailAddress").innerText;

  // Create a textarea element
  var textarea = document.createElement("textarea");
  textarea.value = emailText;

  // Make the textarea invisible
  textarea.style.position = "fixed";
  textarea.style.opacity = 0;

  // Append the textarea to the document body
  document.body.appendChild(textarea);

  // Select the text within the textarea
  textarea.select();

  // Copy the selected text
  document.execCommand("copy");

  // Remove the textarea
  document.body.removeChild(textarea);

  // Alert user that the email has been copied
  alert("Email copied: " + emailText);
}

function copyPhone() {
  // Get the email address text
  var emailText = document.getElementById("phoneNumber").innerText;

  // Create a textarea element
  var textarea = document.createElement("textarea");
  textarea.value = emailText;

  // Make the textarea invisible
  textarea.style.position = "fixed";
  textarea.style.opacity = 0;

  // Append the textarea to the document body
  document.body.appendChild(textarea);

  // Select the text within the textarea
  textarea.select();

  // Copy the selected text
  document.execCommand("copy");

  // Remove the textarea
  document.body.removeChild(textarea);

  // Alert user that the email has been copied
  alert("Email copied: " + emailText);
}

function copyId() {
  // Get the email address text
  var emailText = document.getElementById("orderId").innerText;

  // Create a textarea element
  var textarea = document.createElement("textarea");
  textarea.value = emailText;

  // Make the textarea invisible
  textarea.style.position = "fixed";
  textarea.style.opacity = 0;

  // Append the textarea to the document body
  document.body.appendChild(textarea);

  // Select the text within the textarea
  textarea.select();

  // Copy the selected text
  document.execCommand("copy");

  // Remove the textarea
  document.body.removeChild(textarea);

  // Alert user that the email has been copied
  alert("Email copied: " + emailText);
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".sidebar .nav-link").forEach(function (element) {
    element.addEventListener("click", function (e) {
      let nextEl = element.nextElementSibling;
      let parentEl = element.parentElement;

      if (nextEl) {
        e.preventDefault();
        let mycollapse = new bootstrap.Collapse(nextEl);

        if (nextEl.classList.contains("show")) {
          mycollapse.hide();
        } else {
          mycollapse.show();
          // find other submenus with class=show
          var opened_submenu =
            parentEl.parentElement.querySelector(".submenu.show");
          // if it exists, then close all of them
          if (opened_submenu) {
            new bootstrap.Collapse(opened_submenu);
          }
        }
      }
    });
  });
});

var options = {
  series: [75],
  chart: {
    height: 350,
    type: "radialBar",
    toolbar: {
      show: true,
    },
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 225,
      hollow: {
        margin: 0,
        size: "70%",
        background: "#fff",
        image: undefined,
        imageOffsetX: 0,
        imageOffsetY: 0,
        position: "front",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 0,
          blur: 4,
          opacity: 0.24,
        },
      },
      track: {
        background: "#fff",
        strokeWidth: "67%",
        margin: 0, // margin is in pixels
        dropShadow: {
          enabled: true,
          top: -3,
          left: 0,
          blur: 4,
          opacity: 0.35,
        },
      },

      dataLabels: {
        show: true,
        name: {
          offsetY: -10,
          show: true,
          color: "#888",
          fontSize: "17px",
        },
        value: {
          formatter: function (val) {
            return parseInt(val);
          },
          color: "#111",
          fontSize: "36px",
          show: true,
        },
      },
    },
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "horizontal",
      shadeIntensity: 0.5,
      gradientToColors: ["#ABE5A1"],
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100],
    },
  },
  stroke: {
    lineCap: "round",
  },
  labels: ["Percent"],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 70, 80, 90],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 40, 30, 35],
    },
    // {
    // name: "Free Cash Flow",
    // data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
    // },
  ],
  chart: {
    type: "bar",
    height: 350,
  },

  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "30%",
      endingShape: "rounded",
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
    borderRadius: 20,
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
  yaxis: {
    title: {
      text: "$ (thousands)",
    },
  },

  fill: {
    opacity: 1,
    type: "gradient",
    gradient: {
      type: "vertical",
      shadeIntensity: 0.5,
      gradientToColors: ["#AAE0FF", "#F9C80E"], // Change gradient colors here
      inverseColors: false,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 50],
    },
  },
  dropShadow: {
    enabled: true,
    top: 0,
    left: 0,
    blur: 3,
    opacity: 0.5,
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands";
      },
    },
  },
};

// Add an event listener to the file input element

// Preview Video

function previewVideo(event) {
  var files = event.target.files;
  var videoPreview = document.getElementById("videoPreview");

  // Remove any existing video previews
  videoPreview.innerHTML = "";

  // Loop through each selected file
  for (var i = 0; i < files.length; i++) {
    var file = files[i];

    // Check if the file is a video
    if (file.type.startsWith("video")) {
      var reader = new FileReader();

      // Set up the onload function to display the video preview
      reader.onload = function (e) {
        var video = document.createElement("video");
        var uploadVideo = document.getElementById("upload-video");
        video.src = e.target.result;
        video.controls = true; // Add controls to the video player
        videoPreview.appendChild(video);
        if (videoPreview.childNodes.length > 0) {
          uploadVideo.style.display = "none";
        } else {
          uploadVideo.style.display = "block";
        }
      };

      // Read the video file as a data URL
      reader.readAsDataURL(file);
    }
  }
}

var chart = new ApexCharts(document.querySelector("#columnCharts"), options);
chart.render();

var options = {
  series: [44, 55, 13, 33],
  chart: {
    width: 380,
    type: "donut",
  },
  dataLabels: {
    enabled: false,
  },
  
  
  responsive: [
    {
      breakpoint: 680,
      options: {
        chart: {
          width: 380,
        },
        legend: {
          show: false,
        },
      },
    },
  ],

  colors: ["#EB3D4D", "#F9C80E", "#883DCF", "#2BB2FE"],
  stroke: {
    width: 20,
  },
};

var chart = new ApexCharts(document.querySelector("#expenses"), options);
chart.render();

function appendData() {
  var arr = chart.w.globals.series.slice();
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1);
  return arr;
}

function removeData() {
  var arr = chart.w.globals.series.slice();
  arr.pop();
  return arr;
}

function randomize() {
  return chart.w.globals.series.map(function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1;
  });
}

function reset() {
  return options.series;
}

document.querySelector("#randomize").addEventListener("click", function () {
  chart.updateSeries(randomize());
});

document.querySelector("#add").addEventListener("click", function () {
  chart.updateSeries(appendData());
});

document.querySelector("#remove").addEventListener("click", function () {
  chart.updateSeries(removeData());
});

document.querySelector("#reset").addEventListener("click", function () {
  chart.updateSeries(reset());
});

function showAlert() {
  Swal.fire({
    html: `
      <span style="background-color:#FEECEE;padding:10px 15px;border-radius:50%;font-size:24px"> <i style="color:#EB3D4D" class="fa-solid fa-trash-can"></i></span>
    <h2 style="color:#1D1F2C;margin-top:10px ;font-size:20px">Delete Project </h2>
    <span style="color:#667085;font-size:16px">Do you want to delete this project? This action can’t be undone</span>
  `,

    showCancelButton: true,
    denyButtonText: `Cancel`,
    confirmButtonText: "Delete",
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Deleted", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Not Deleted", "", "info");
    }
  });
}

async function inputFile() {
  const { value: file } = await Swal.fire({
    title: "Select image",
    input: "file",
    inputAttributes: {
      accept: "image/*",
      "aria-label": "Upload your profile picture",
    },
  });
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      Swal.fire({
        title: "Your uploaded picture",
        imageUrl: e.target.result,
        imageAlt: "The uploaded picture",
      });
    };
    reader.readAsDataURL(file);
  }
}

// Preview Images
function previewImages(event) {
  var files = event.target.files;
  console.log(event);
  for (var i = 0; i < files.length; i++) {
    var file = files[i];
    if (file && file.type.startsWith("image")) {
      var reader = new FileReader();
      reader.onload = function (e) {
        var imagePreview = document.getElementById("imagePreview");
        var uploadImg = document.getElementById("upload-img");
        var img = document.createElement("img");
        img.src = e.target.result;
        img.alt = "Preview";
        imagePreview.appendChild(img);
        if (imagePreview.childNodes.length > 0) {
          uploadImg.style.display = "none";
        } else {
          uploadImg.style.display = "block";
        }
      };
      reader.readAsDataURL(file);
    }
  }
}
document.getElementById("imageInput").addEventListener("change", previewImages);

// Function To Add  New Variation in add Product page
function addVariation() {
  // Clone the existing variation section
  const clone = document.querySelector(".product-variation").cloneNode(true);

  // Clear input values in the cloned section
  clone.querySelector("input").value = "";

  // Get the parent container
  const container = document.getElementById("variations-container");

  // Insert the cloned section before the button
  container.insertBefore(clone, container.firstElementChild.nextSibling);
}
function removeVariation(button) {
  // Remove the parent variation section
  button.closest(".product-variation").remove();
}

// Export File With Java Script

document.getElementById("exportButton").addEventListener("click", function () {
  alert("exportButton");
  // Sample data
  var data = [
    ["Product_Name", "SKU", "Category", "Stock", "Price", "Status", "Add_Date"],
    [
      "Handmade Pouch",
      302012,
      "Bag & Pouch",
      10,
      121,
      "low stock",
      "22 Dec 2024",
    ],
    ["Smartwatch E2", 302011, "Watch", 15, 225, "Draft", "15 Jun 2024"],
    [
      "Headphone G1 Pro",
      302002,
      "PC Desktop	",
      300,
      720,
      "Published",
      "24 Jan 2024",
    ],
  ];

  // Create a new workbook
  var workbook = XLSX.utils.book_new();

  // Convert data array to worksheet
  var worksheet = XLSX.utils.aoa_to_sheet(data);

  // Add worksheet to workbook
  XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

  // Save workbook as Excel file
  XLSX.writeFile(workbook, "exported_data.xlsx");
});

// Calender Page
