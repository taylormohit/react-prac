/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, exports) {

/**
 * Shards â€” Main demo page script.
 */



// Main demo script.
(function ($) {
  $(document).ready(function() {

    // Hide the loader and show the elements.
    setTimeout(function () {
      $('.loader').addClass('hidden').delay(200).remove();
      $('.slide-in').each(function() {
        $(this).addClass('visible');
      });
    }, 1900);

    // Enable popovers everywhere.
    $('[data-toggle="popover"]').popover();

    // Enable tooltips everywhere.
    $('[data-toggle="tooltip"]').tooltip();

    // Disable example anchors scroll to top action.
    $('.example a').click(function(event) {
        event.target.getAttribute('href') === '#' && event.preventDefault();
    });

    // Hook the "Learn More" button event to scroll to content.
    $('#scroll-to-content').click(function(ev) {
      ev.preventDefault();
      if (typeof ev.target.dataset.scrollTo === 'undefined') {
        return;
      }

      $('html, body').animate({
        scrollTop: $(ev.target.dataset.scrollTo).offset().top - 100
      }, 1000)
    });

    //
    // Setup examples.
    //

    // Slider example 1.
    $('#slider-example-1').customSlider({
      start: [20, 80],
      range: {
        min: 0,
        max: 100
      },
      connect: true
    });

    // Slider example 2.
    $('#slider-example-2').customSlider({
      start: [20, 80],
      range: {
        min: 0,
        max: 100
      },
      connect: true,
      tooltips: true
    });

    // Slider example 3.
    $('#slider-example-3').customSlider({
      start: [20, 80],
      range: {
        min: 0,
        max: 100
      },
      connect: true,
      tooltips: true,
      pips: {
        mode: 'positions',
        values: [0, 25, 50, 75, 100],
        density: 5
      }
    });

    // Datepicker example 1.
    $('#datepicker-example-1').datepicker({});

    // Datepicker example 2.
    $('#datepicker-example-2').datepicker({});


    // Table Sorting
    $(document).ready(function() {
		if($('.table-sorting').length){
			$('.table-sorting').DataTable();
		}
    });

    // Left mobile menu
    $('.navbar-toggler').click(function(){
        if ($('body').hasClass('menu-left-opened')) {
            $(this).removeClass('is-active');
            $('body').removeClass('menu-left-opened');
            $('html').css('overflow','auto');
        } else {
            $(this).addClass('is-active');
            $('body').addClass('menu-left-opened');
            $('html').css('overflow','hidden');
        }
    });
    $('.mobile-menu-left-overlay').click(function(){
        $('.hamburger').removeClass('is-active');
        $('body').removeClass('menu-left-opened');
        $('html').css('overflow','auto');
    });

    // Table
    function ResponsiveCellHeaders(elmID) {
      try {
        var THarray = [];
        var table = document.getElementById(elmID);
        var ths = table.getElementsByTagName("th");
        for (var i = 0; i < ths.length; i++) {
          var headingText = ths[i].innerHTML;
          THarray.push(headingText);
        }
        var styleElm = document.createElement("style"),
          styleSheet;
        document.head.appendChild(styleElm);
        styleSheet = styleElm.sheet;
        for (var i = 0; i < THarray.length; i++) {
          styleSheet.insertRule(
            "#" +
              elmID +
              " td:nth-child(" +
              (i + 1) +
              ')::before {content:"' +
              THarray[i] +
              ': ";}',
            styleSheet.cssRules.length
          );
        }
      } catch (e) {
        console.log("ResponsiveCellHeaders(): " + e);
      }
    }
    ResponsiveCellHeaders("table-block");



    // Line Chart
	if(document.getElementById("lineChart")){
    var ctxL = document.getElementById("lineChart").getContext('2d');
    var myLineChart = new Chart(ctxL, {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "My Second dataset",
                    data: [30, 50, 25, 40, 60, 40, 70],
                    backgroundColor: [
                        'rgba(74,162,243,0)'
                    ],
                    borderColor: [
                        '#4aa2f3'
                    ],
                    borderWidth: 3
                },
                {
                    label: "My First dataset",
                    backgroundColor: [
                        'rgba(251,181,20,0)'
                    ],
                    borderColor: [
                        '#fbb514'
                    ],
                    borderWidth: 3,
                    data: [20, 40, 30, 25, 45, 30, 40]
                }
            ]
        },
        options: {
            responsive: true
        }    
    });
	}


    // Bar Chart
	if(document.getElementById("barChart")){
    var ctxB = document.getElementById("barChart").getContext('2d');
    var myBarChart = new Chart(ctxB, {
        type: 'bar',
        data: {
            labels: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
            datasets: [{
                label: 'User Statistics',
                data: [210, 180, 230, 130, 245, 235, 190],
                backgroundColor: [
                    '#d5dae6',
                    '#d5dae6',
                    '#d5dae6',
                    '#d5dae6',
                    '#d5dae6',
                    '#d5dae6',
                    '#d5dae6'
                ],
                hoverBackgroundColor:[
                    '#15a4fa',
                    '#15a4fa',
                    '#15a4fa',
                    '#15a4fa',
                    '#15a4fa',
                    '#15a4fa',
                    '#15a4fa'
                ]
            }]
        },
        optionss: {
            responsive: true
        }
    });
	}


    //Doughnut Chart
    // custom var   
    var presets = window.chartColors;
    var utils = Samples.utils;
    var inputs = {
        min: 1,
        max: 100,
        count: 8,
        decimals: 2,
        continuity: 1
    };
    function generateData(config) {
        return utils.numbers(Chart.helpers.merge(inputs, config || {}));
    }

    // custom var
	if(document.getElementById("boundaries-line")){
    var ctxD = document.getElementById("boundaries-line").getContext('2d');
    var myboundariesChart = new Chart(ctxD, {
        type: 'line',
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            datasets:
                [{
                    borderColor: presets.blue,
                    label:'Dataset',
                    lineTension: 0.0001,
                    data: [20, 50, 15, 50, 40, 30, 60, 50, 80, 70, 90, 60],
                    fill: 'boundary'
                }]
        },
        options: {
        }

    });
	}


    //Pie Chart
	if(document.getElementById("pieChart")){
    var ctxP = document.getElementById("pieChart").getContext('2d');
    var myPieChart = new Chart(ctxP, {
        type: 'pie',
        data: {
            labels: ["Blue", "Dark Blue", "Yellow", "Grey", "Dark Grey"],
            datasets: [
                {
                    data: [300, 50, 100, 40, 120],
                    backgroundColor: ["#8bc2f5", "#5b7499", "#f9c856", "#cdd4df", "#cbcbcb"],
                    hoverBackgroundColor: ["#5baffc", "#3e4f68", "#e2a313", "#A8B3C5", "#a0a0a0"]
                }
            ]
        },
        options: {
            responsive: true
        }    
    });
    }
	
	// Legend Chart
	var color = Chart.helpers.color;
	function createConfig(colorName) {
		return {
			type: 'line',
			data: {
				labels: ["January", "February", "March", "April", "May", "June", "July"],
				datasets: [{
					label: "My First dataset",
					data: [
						randomScalingFactor(), 
						randomScalingFactor(), 
						randomScalingFactor(), 
						randomScalingFactor(), 
						randomScalingFactor(), 
						randomScalingFactor(), 
						randomScalingFactor()
					],
					backgroundColor: ["#d5dae6"],
					borderColor: ["#b4b8c3"],
					borderWidth: 1,
					pointStyle: 'rectRot',
					pointRadius: 5,
					pointBorderColor: 'rgb(0, 0, 0)'
				}]
			},
			options: {
				responsive: true,
				legend: {
					labels: {
						usePointStyle: false
					}
				},
				scales: {
					xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Month'
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Value'
						}
					}]
				}
			}
		};
	}

	function createPointStyleConfig(colorName) {
		var config = createConfig(colorName);
		config.options.legend.labels.usePointStyle = true;
		config.options.title.text = 'Point Style Legend';
		return config;
	}
	if(document.getElementById("chart-legend-normal")){
		[{
			id: 'chart-legend-normal',
			config: createConfig('red')
		}].forEach(function(details) {			
			var ctx = document.getElementById(details.id).getContext('2d');
			new Chart(ctx, details.config)
		})
	}


	// Chartjs Monitor
	var timeFormat = 'MM/DD/YYYY HH:mm';
	function newDateString(days) {
		return moment().add(days, 'd').format(timeFormat);
	}
	var color = Chart.helpers.color;
	var config = {
		type: 'bar',
		data: {
			labels: [
				newDateString(0), 
				newDateString(1), 
				newDateString(2), 
				newDateString(3), 
				newDateString(4), 
				newDateString(5), 
				newDateString(6)
			],
			datasets: [{
				type: 'bar',
				label: 'Dataset 1',
				backgroundColor: ["#d5dae6"],
                hoverBackgroundColor: ["#d5dae6"],
				borderColor: ["#d5dae6"],
				data: [
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor()
				],
			 },
             {
				type: 'bar',
				label: 'Dataset 2',
				backgroundColor: ["#15a4fa"],
                hoverBackgroundColor: ["#15a4fa"],
				borderColor: ["#15a4fa"],
				data: [
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor()
				],
			 },
             {
				type: 'line',
				label: 'Dataset 3',
				backgroundColor: ["#f9b431"],
				borderColor:["#f9b431"],
				fill: false,
				data: [
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor(), 
					randomScalingFactor()
				],
			}, ]
		},
		options: {
			scales: {
				xAxes: [{
					type: "time",
					display: true,
					time: {
						format: timeFormat,
						// round: 'day'
					}
				}],
			},
		}
	};
	if(document.getElementById("chartjs-render-monitor")){
		var ctx = document.getElementById("chartjs-render-monitor").getContext("2d");
		window.myLine = new Chart(ctx, config);
	}


    // Regular map
    function regular_map() {
        var var_location = new google.maps.LatLng(40.725118, -73.997699);

        var var_mapoptions = {
            center: var_location,
            zoom: 14
        };

        var var_map = new google.maps.Map(document.getElementById("map-container"),
            var_mapoptions);

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "New York",
            icon: "images/map-pin.png"
        });
    }

    // Initialize maps
    google.maps.event.addDomListener(window, 'load', regular_map);


    // Custom map
    function custom_map() {

        var var_location = new google.maps.LatLng(40.725118, -73.997699);

        var var_mapoptions = {
            center: var_location,
            zoom: 14,
            styles: [
                {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "simplified"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "road.local",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                        {
                            "visibility": "on"
                        }
                    ]
                },
                {
                    "featureType": "road.arterial",
                    "elementType": "all",
                    "stylers": [
                        {
                            "visibility": "off"
                        }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "all",
                    "stylers": [
                        {
                            "color": "#5f94ff"
                        },
                        {
                            "lightness": 26
                        },
                        {
                            "gamma": 5.86
                        }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "all",
                    "stylers": [
                        {
                            "weight": 0.6
                        },
                        {
                            "saturation": -85
                        },
                        {
                            "lightness": 61
                        }
                    ]
                },
                {
                    "featureType": "landscape",
                    "elementType": "all",
                    "stylers": [
                        {
                            "hue": "#0066ff"
                        },
                        {
                            "saturation": 74
                        },
                        {
                            "lightness": 100
                        }
                    ]
                }
            ]
        };

        var var_map = new google.maps.Map(document.getElementById("map-container-2"),
            var_mapoptions);

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "New York",
            icon: "images/map-pin.png"
        });
    }

    // Initialize maps
    google.maps.event.addDomListener(window, 'load', custom_map);


    // Satellite map
    function satellite_map() {
        var var_location = new google.maps.LatLng(48.856847, 2.296832);

        var var_mapoptions = {
            center: var_location,
            zoom: 16,
            mapTypeId: 'satellite'
        };

        var var_map = new google.maps.Map(document.getElementById("map-container-3"),
            var_mapoptions);

        var var_marker = new google.maps.Marker({
            position: var_location,
            map: var_map,
            title: "Paris, France",
            icon: "images/map-pin.png"
        });
    }

    // Initialize maps
    google.maps.event.addDomListener(window, 'load', satellite_map);


  });
})(jQuery);


/***/ })

/******/ });