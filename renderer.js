let { remote } = require("electron");
// console.log(process.versions.electron);

const { PosPrinter } = remote.require("electron-pos-printer");
// const {PosPrinter} = require("electron-pos-printer"); //dont work in production (??)

const path = require("path");

let webContents = remote.getCurrentWebContents();
let printers = webContents.getPrinters(); //list the printers
console.log(printers);

printers.map((item, index) => {
  //write in the screen the printers for choose
  document.getElementById("list_printers").innerHTML +=
    ' <input type="radio" id="printer_' +
    index +
    '" name="printer" value="' +
    item.name +
    '"><label for="printer_' +
    index +
    '">' +
    item.name +
    "</label><br>";
});


const data = [
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "||---",
    style: `text-align:left;`,
    css: { "font-size": "12px" },
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "HEADER",
    style: `text-align:center;`,
    css: { "font-weight": "700", "font-size": "18px" },
  },
  {
    type: "image",
    path: path.join(__dirname, "assets/img_test.png"), // file path
    position: "center", // position of image: 'left' | 'center' | 'right'
    width: "auto", // width of image in px; default: auto
    height: "60px", // width of image in px; default: 50 or '50px'
    sectionStyle: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    attributes: {
      width: '100px',
      height: '100px',
    },
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
    value:
      "Lorem ipsum<br><br> . , ; : ( ) - + = ! # % \" ' <br><br> ã Ã ç Ç $ & @ ê Ê í Í<br><br> 0 1 2 3 4 5 6 7 8 9 <br>a b c d e f g h i j k l m n o p q r s t u v w x y z<br>A B C D E F G H I J K L M N O P Q R S T U V W X Y Z<br><br><hr><br>elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \n ullamco \n laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum<br>",

    css: {
      "font-size": "12px",
      "font-family": "sans-serif",
      "text-align": "center",
    },
  },
  {
    type: "barCode", // Do you think the result is ugly? Me too. Try use an image instead...
    value: "HB4587896",
    height: 12,
    width: 1,
    displayValue: true, // Display value below barcode
    fontsize: 8,
  },
  {
    type: "qrCode",
    value: "https://github.com/fssonca",
    height: 80,
    width: 80,
    style: "margin-left:50px",
  },
  {
    type:     'table',
    header: [ 'Item', 'Price' ],
    rows: [
      [ 'Popcorn',  '$5.00' ],
      [ 'Soda',     '$3.00' ],
      [ 'Candy',    '$2.00' ],
    ],
    footer: [ 'Total', '$10.00' ],
  },
  {
    type: "text", // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: "---||",
    style: `text-align:right;`,
    css: { "font-size": "12px" },
  },
  {
    type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
    value: 'SAMPLE HEADING',
    style: `text-align:center;`,
    css: {"font-weight": "700", "font-size": "18px"}
 },{
    type: 'text',                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
    value: 'Secondary text',
    style: `text-align:left;color: red;`,
    css: {"text-decoration": "underline", "font-size": "10px"}
 },{
    type: 'barCode',
    value: 'HB4587896',
    height: 12,                     // height of barcode, applicable only to bar and QR codes
    width: 1,                       // width of barcode, applicable only to bar and QR codes
    displayValue: true,             // Display value below barcode
    fontsize: 8,
 },{
    type: 'DoubleBarCode',
    value1 : 'HB4587896',
    value2 : 'HB4587896',
    height: 12,                     // height of barcode, applicable only to bar and QR codes
    width: 1,                       // width of barcode, applicable only to bar and QR codes
    displayValue: true,             // Display value below barcode
    fontsize: 8,
    headerText1:'Business Name',    // Optional
    additionalText1:'Product Name', // Optional
    footerText1:'MRP: ₹ 200',       // Optional
    headerText2:'Business Name',    // Optional
    additionalText2:'Product Name', // Optional
    footerText2:'MRP: ₹ 400',       // Optional
    style:`width:94px;heigth:56.6px;text-align:center;font-family:Helvetica, sans-serif;margin:2px;`,             
    headerStyle1:`margin-bottom: 1px;font-size:12px;`,                // Header text 1 style     
    itemStyle1:`margin-top: -3px;font-size:12px;`,                  // Value Style
    lineStyle1:`margin-top: -8px;font-size:12px;`,                  // Additional text 1 style
    footerStyle1:`margin-top: -10px;font-size:12px;`,                // Footer text 1 style
    headerStyle2:`margin-bottom: 1px;font-size:12px;`,                // Header text 1 style  
    lineStyle2:`margin-top: -8px;font-size:12px;`,                  // Additional text 2 style
    footerStyle2:`margin-top: -10px;font-size:12px;`,                // Footer text 2 style
 },{
    type: 'oneInchDoubleSingleBarCode',
    value1 : 'HB4587896',
    height: 12,                     // height of barcode, applicable only to bar and QR codes
    width: 1,                       // width of barcode, applicable only to bar and QR codes
    displayValue: true,             // Display value below barcode
    fontsize: 8,
    headerText1:'Business Name',    // Optional
    additionalText1:'Product Name', // Optional
    footerText1:'MRP: ₹ 200',       // Optional
    style:`width:94px;heigth:56.6px;text-align:center;font-family:Helvetica, sans-serif;margin:2px;`,             
    headerStyle1:`margin-bottom: 1px;font-size:12px;`,                // Header text 1 style     
    itemStyle1:`margin-top: -3px;font-size:12px;`,                  // Value Style
    lineStyle1:`margin-top: -8px;font-size:12px;`,                  // Additional text 1 style
    footerStyle1:`margin-top: -10px;font-size:12px;`,                // Footer text 1 style
 },{
    type: 'oneInchDoubleBarCode',
    value1 : 'HB4587896',
    value2 : 'HB4587896',
    height: 12,                     // height of barcode, applicable only to bar and QR codes
    width: 1,                       // width of barcode, applicable only to bar and QR codes
    displayValue: true,             // Display value below barcode
    fontsize: 8,
    headerText1:'Business Name',    // Optional
    additionalText1:'Product Name', // Optional
    footerText1:'MRP: ₹ 200',       // Optional
    headerText2:'Business Name',    // Optional
    additionalText2:'Product Name', // Optional
    footerText2:'MRP: ₹ 400',       // Optional
    style:`width:94px;heigth:56.6px;text-align:center;font-family:Helvetica, sans-serif;margin:2px;`,             
    headerStyle1:`margin-bottom: 1px;font-size:12px;`,                // Header text 1 style     
    itemStyle1:`margin-top: -3px;font-size:12px;`,                  // Value Style
    lineStyle1:`margin-top: -8px;font-size:12px;`,                  // Additional text 1 style
    footerStyle1:`margin-top: -10px;font-size:12px;`,                // Footer text 1 style
    headerStyle2:`margin-bottom: 1px;font-size:12px;`,                // Header text 1 style  
    lineStyle2:`margin-top: -8px;font-size:12px;`,                  // Additional text 2 style
    footerStyle2:`margin-top: -10px;font-size:12px;`,                // Footer text 2 style
 },{
    type: 'SingleBarCode',
    value1 : 'HB4587896',
    height: 12,                     // height of barcode, applicable only to bar and QR codes
    width: 1,                       // width of barcode, applicable only to bar and QR codes
    displayValue: true,             // Display value below barcode
    fontsize: 8,
    headerText1:'Business Name',    // Optional
    additionalText1:'Product Name', // Optional
    footerText1:'MRP: ₹ 200',       // Optional
    style:`width:94px;heigth:56.6px;text-align:center;font-family:Helvetica, sans-serif;margin:2px;`,             
    headerStyle1:`margin-bottom: 1px;font-size:12px;`,                // Header text 1 style     
    itemStyle1:`margin-top: -3px;font-size:12px;`,                  // Value Style
    lineStyle1:`margin-top: -8px;font-size:12px;`,                  // Additional text 1 style
    footerStyle1:`margin-top: -10px;font-size:12px;`,                // Footer text 1 style
 },{
    type: 'oneInchBarCode',
    value1 : 'HB4587896',
    height: 12,                     // height of barcode, applicable only to bar and QR codes
    width: 1,                       // width of barcode, applicable only to bar and QR codes
    displayValue: true,             // Display value below barcode
    fontsize: 8,
    headerText1:'Business Name',    // Optional
    additionalText1:'Product Name', // Optional
    footerText1:'MRP: ₹ 200',       // Optional
    style:`width:94px;heigth:56.6px;text-align:center;font-family:Helvetica, sans-serif;margin:2px;`,             
    headerStyle1:`margin-bottom: 1px;font-size:12px;`,                // Header text 1 style     
    itemStyle1:`margin-top: -3px;font-size:12px;`,                  // Value Style
    lineStyle1:`margin-top: -8px;font-size:12px;`,                  // Additional text 1 style
    footerStyle1:`margin-top: -10px;font-size:12px;`,                // Footer text 1 style
 },{
   type: 'qrCode',
    value: 'https://github.com/Hubertformin/electron-pos-printer',
    height: 55,
    width: 55,
    style: 'margin: 10 20px 20 20px'
  },{
     type: 'table',
     // style the table
     style: 'border: 1px solid #ddd',
     // list of the columns to be rendered in the table header
     tableHeader: ['Animal', 'Age'],
     // multi dimensional array depicting the rows and columns of the table body
     tableBody: [
         ['Cat', 2],
         ['Dog', 4],
         ['Horse', 12],
         ['Pig', 4],
     ],
     // list of columns to be rendered in the table footer
     tableFooter: ['Animal', 'Age'],
     // custom style for the table header
     tableHeaderStyle: 'background-color: #000; color: white;',
     // custom style for the table body
     tableBodyStyle: 'border: 0.5px solid #ddd',
     // custom style for the table footer
     tableFooterStyle: 'background-color: #000; color: white;',
  }
];


const data1 = [
  {
    type: 'image',                                       
    path: path.join(__dirname, "assets/img_test.png"),     // file path
    position: 'center',                                  // position of image: 'left' | 'center' | 'right'
    width: '60px',                                           // width of image in px; default: auto
    height: '60px',                                          // width of image in px; default: 50 or '50px'
  },{
     type: 'text',                                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table
     value: 'SAMPLE HEADING',
     style: `text-align:center;`,
     css: {"font-weight": "700", "font-size": "18px"}
  },{
     type: 'text',                       // 'text' | 'barCode' | 'qrCode' | 'image' | 'table'
     value: 'Secondary text',
     style: `text-align:left;color: red;`,
     css: {"text-decoration": "underline", "font-size": "10px"}
  },{
     type: 'barCode',
     value: 'HB4587896',
     height: 12,                     // height of barcode, applicable only to bar and QR codes
     width: 1,                       // width of barcode, applicable only to bar and QR codes
     displayValue: true,             // Display value below barcode
     fontsize: 8,
  },{
    type: 'qrCode',
     value: 'https://github.com/Hubertformin/electron-pos-printer',
     height: 55,
     width: 55,
     style: 'margin: 10 20px 20 20px'
   },{
      type: 'table',
      // style the table
      style: 'border: 1px solid #ddd',
      // list of the columns to be rendered in the table header
      tableHeader: ['Animal', 'Age'],
      // multi dimensional array depicting the rows and columns of the table body
      tableBody: [
          ['Cat', 2],
          ['Dog', 4],
          ['Horse', 12],
          ['Pig', 4],
      ],
      // list of columns to be rendered in the table footer
      tableFooter: ['Animal', 'Age'],
      // custom style for the table header
      tableHeaderStyle: 'background-color: #000; color: white;',
      // custom style for the table body
      tableBodyStyle: 'border: 0.5px solid #ddd',
      // custom style for the table footer
      tableFooterStyle: 'background-color: #000; color: white;',
   },{
      type: 'table',
      style: 'border: 1px solid #ddd',             // style the table
      // list of the columns to be rendered in the table header
      tableHeader: [{type: 'text', value: 'Animal'}, {type: 'image', path: path.join(__dirname, "assets/img_test.png")}],
      // multi dimensional array depicting the rows and columns of the table body
      tableBody: [
          [{type: 'text', value: 'Cat'}, {type: 'image', path: path.join(__dirname, "assets/img_test.png")}],
          [{type: 'text', value: 'Dog'}, {type: 'image', path: path.join(__dirname, "assets/img_test.png")}],
          [{type: 'text', value: 'Horse'}, {type: 'image', path: path.join(__dirname, "assets/img_test.png")}],
          [{type: 'text', value: 'Pig'}, {type: 'image', path: path.join(__dirname, "assets/img_test.png")}],
      ],
      // list of columns to be rendered in the table footer
      tableFooter: [{type: 'text', value: 'Animal'}, 'Image'],
      // custom style for the table header
      tableHeaderStyle: 'background-color: #000; color: white;',
      // custom style for the table body
      tableBodyStyle: 'border: 0.5px solid #ddd',
      // custom style for the table footer
      tableFooterStyle: 'background-color: #000; color: white;',
   },
]

function date() {
  const x = new Date();

  const y = "0" + x.getHours();
  const z = "0" + x.getMinutes();
  const s = "0" + x.getSeconds();
  const h = "0" + x.getDate();
  const ano = x.getFullYear().toString().substr(-2);
  const ms = x.getMonth();
  const meses = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  return (
    y.substr(-2) +
    ":" +
    z.substr(-2) +
    ":" +
    s.substr(-2) +
    " -  " +
    h.substr(-2) +
    "/" +
    meses[ms]
  );
}

function print() {
  let printerName;
  let widthPage;

  var p = document.getElementsByName("printer");
  var w = document.getElementsByName("width");

  for (var i = 0, length = p.length; i < length; i++) {
    if (p[i].checked) {
      printerName = p[i].value;

      break;
    }
  }

  for (var i = 0, length = w.length; i < length; i++) {
    if (w[i].checked) {
      widthPage = w[i].value;

      break;
    }
  }

  console.log(printerName, widthPage);

  const options = {
    preview: false, // Preview in window or print
    width: widthPage, //  width of content body
    margin: "0 0 0 0", // margin of content body
    copies: 1, // Number of copies to print
    printerName: printerName, // printerName: string, check it at webContent.getPrinters()
    timeOutPerLine: 400,
    silent: true,
    pageSize: { height: 275000, width: 1200000 }
  };

  const now = {
    type: "text",
    value: "" + date(),
    style: `text-align:center;`,
    css: { "font-size": "12px", "font-family": "sans-serif" },
  };

  const d = [...data, now];

  if (printerName && widthPage) {
    PosPrinter.print(d, options)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  } else {
    alert("Select the printer and the width");
  }
}
