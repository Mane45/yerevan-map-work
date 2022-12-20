require([
  "esri/Map",
  "esri/views/MapView",
  "esri/views/SceneView",
  "esri/layers/FeatureLayer",
  "esri/layers/SceneLayer",
  "esri/widgets/BasemapToggle",
  "esri/geometry/SpatialReference"
], function (Map, MapView, SceneView, FeatureLayer, SceneLayer, BasemapToggle,SpatialReference) {
  let switchButton = document.getElementById("switch-btn");

  const verticalOffset = {
    screenLength: 40,
    maxWorldLength: 200,
    minWorldLength: 35,
  };
  function getUniqueValueSymbol(name) {
    return {
      type: "point-3d",
      symbolLayers: [
        {
          type: "icon",
          resource: {
            href: name,
          },
          size: 25,
        },
      ],
      verticalOffset: verticalOffset,
      callout: {
        type: "line",
        color: "white",
        size: 0.02,
      },
    };
  }
  let render2d = {
    type: "unique-value",
    field: "category_name",
    defaultSymbol: { type: "simple-fill" },
    uniqueValueInfos: [
      {
        value: "Մանկական ժամանց",
        symbol: {
          type: "picture-marker",
          url: "./img/ChildrenEntertainment.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Հրապարակներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Squares.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Շատրվաններ",
        symbol: {
          type: "picture-marker",
          url: "./img/Fountains.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Կամարանցումներ",
        symbol: {
          type: "picture-marker",
          url: "./img/ArchPasses.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Investment programs",
        symbol: {
          type: "picture-marker",
          url: "./img/OvergroundCrossings.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Այգիներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Parks.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Կինոթատրոններ",
        symbol: {
          type: "picture-marker",
          url: "./img/Cinemas.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Թատրոններ",
        symbol: {
          type: "picture-marker",
          url: "./img/Theaters.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Համերգասրահներ",
        symbol: {
          type: "picture-marker",
          url: "./img/ConcertHalls.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Թանգարաններ",
        symbol: {
          type: "picture-marker",
          url: "./img/Museums.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Պատկերասրահներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Galleries.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Հուշարձաններ",
        symbol: {
          type: "picture-marker",
          url: "./img/Monuments.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Մշակույթի կենտրոններ",
        symbol: {
          type: "picture-marker",
          url: "./img/CulturalCenteres.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Հիվանդանոցներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Hospitals.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Պոլիկլինիկաներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Polyclinics.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Բուհեր",
        symbol: {
          type: "picture-marker",
          url: "./img/Universities.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Դպրոցներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Schools.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Մանկապարտեզներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Kindergartens.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Գրադարաններ",
        symbol: {
          type: "picture-marker",
          url: "./img/Libraries.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Երաժշտական և արվեստի դպրոցներ",
        symbol: {
          type: "picture-marker",
          url: "./img/MusicalandArtSchool.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Եկեղեցիներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Churches.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Դեսպանություններ",
        symbol: {
          type: "picture-marker",
          url: "./img/Embasies.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Սահադաշտեր",
        symbol: {
          type: "picture-marker",
          url: "./img/SkatingRings.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Մարզադպրոցներ",
        symbol: {
          type: "picture-marker",
          url: "./img/SportSchool.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Մարզասրահներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Gyms.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Հեծանվահրապարակներ",
        symbol: {
          type: "picture-marker",
          url: "./img/Velodromes.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Մետրոյի կայարաններ",
        symbol: {
          type: "picture-marker",
          url: "./img/MetroStations.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Բենզալցակայան",
        symbol: {
          type: "picture-marker",
          url: "./img/PetrolStations.png",
          width: 25,
          height: 25,
        },
      },
      {
        value: "Electric vehicle charging station",
        symbol: {
          type: "picture-marker",
          url: "./img/ElectricChargingStation.png",
          width: 25,
          height: 25,
        },
      },
    ],
  };
  let renderEvents = {
    type: "simple",
    symbol: {
      type: "picture-marker",
      //url: "./img/event.png",
      url: "./img/eventold.png",
      width: "40px",
      height: "40px",
    },
  };
  let renderEvents3d = {
    type: "simple",
    // field: "category_name",
    //defaultSymbol: { type: "simple-fill" },
    symbol: {
      type: "point-3d",
      symbolLayers: [
        {
          type: "icon",
          resource: {
            //href: "./img/event.png",
            href: "./img/eventold.png",
          },
          size: 35,
        },
      ],
      verticalOffset: verticalOffset,
      callout: {
        type: "line",
        color: "white",
        size: 0.02,
      },
    },
  };
  let render3d = {
    type: "unique-value",
    field: "category_name",
    defaultSymbol: { type: "simple-fill" },
    uniqueValueInfos: [
      {
        value: "Մանկական ժամանց",
        symbol: getUniqueValueSymbol("./img/ChildrenEntertainment.png"),
      },
      {
        value: "Հրապարակներ",
        symbol: getUniqueValueSymbol("./img/Squares.png"),
      },
      {
        value: "Շատրվաններ",
        symbol: getUniqueValueSymbol("./img/Fountains.png"),
      },
      {
        value: "Կամարանցումներ",
        symbol: getUniqueValueSymbol("./img/ArchPasses.png"),
      },
      {
        value: "Investment programs",
        symbol: getUniqueValueSymbol("./img/OvergroundCrossings.png"),
      },
      {
        value: "Այգիներ",
        symbol: getUniqueValueSymbol("./img/Parks.png"),
      },
      {
        value: "Կինոթատրոններ",
        symbol: getUniqueValueSymbol("./img/Cinemas.png"),
      },
      {
        value: "Թատրոններ",
        symbol: getUniqueValueSymbol("./img/Theaters.png"),
      },
      {
        value: "Համերգասրահներ",
        symbol: getUniqueValueSymbol("./img/ConcertHalls.png"),
      },
      {
        value: "Թանգարաններ",
        symbol: getUniqueValueSymbol("./img/Museums.png"),
      },
      {
        value: "Պատկերասրահներ",
        symbol: getUniqueValueSymbol("./img/Galleries.png"),
      },
      {
        value: "Հուշարձաններ",
        symbol: getUniqueValueSymbol("./img/.png"),
      },
      {
        value: "Մշակույթի կենտրոններ",
        symbol: getUniqueValueSymbol("./img/CulturalCenteres.png"),
      },
      {
        value: "Հիվանդանոցներ",
        symbol: getUniqueValueSymbol("./img/Hospitals.png"),
      },
      {
        value: "Պոլիկլինիկաներ",
        symbol: getUniqueValueSymbol("./img/Polyclinics.png"),
      },
      {
        value: "Բուհեր",
        symbol: getUniqueValueSymbol("./img/Universities.png"),
      },
      {
        value: "Դպրոցներ",
        symbol: getUniqueValueSymbol("./img/Schools.png"),
      },
      {
        value: "Մանկապարտեզներ",
        symbol: getUniqueValueSymbol("./img/Kindergartens.png"),
      },
      {
        value: "Գրադարաններ",
        symbol: getUniqueValueSymbol("./img/Libraries.png"),
      },
      {
        value: "Երաժշտական և արվեստի դպրոցներ",
        symbol: getUniqueValueSymbol("./img/MusicalandArtSchool.png"),
      },
      {
        value: "Եկեղեցիներ",
        symbol: getUniqueValueSymbol("./img/Churches.png"),
      },
      {
        value: "Դեսպանություններ",
        symbol: getUniqueValueSymbol("./img/Embasies.png"),
      },
      {
        value: "Սահադաշտեր",
        symbol: getUniqueValueSymbol("./img/SkatingRings.png"),
      },
      {
        value: "Մարզադպրոցներ",
        symbol: getUniqueValueSymbol("./img/SportSchool.png"),
      },
      {
        value: "Մարզասրահներ",
        symbol: getUniqueValueSymbol("./img/Gyms.png"),
      },
      {
        value: "Հեծանվահրապարակներ",
        symbol: getUniqueValueSymbol("./img/Velodromes.png"),
      },
      {
        value: "Մետրոյի կայարաններ",
        symbol: getUniqueValueSymbol("./img/MetroStations.png"),
      },
      {
        value: "Բենզալցակայան",
        symbol: getUniqueValueSymbol("./img/PetrolStations.png"),
      },
      {
        value: "Electric vehicle charging station",
        symbol: getUniqueValueSymbol("./img/ElectricChargingStation.png"),
      },
    ],
  };
  const featureLayer = new FeatureLayer({
    url: "https://services4.arcgis.com/XZEtqni2CM1tP1ZM/arcgis/rest/services/YerevanPOIs/FeatureServer",
    popupTemplate: {
      title: "{name}",
      content: `<ul>
        <li><div style='margin: 0; justify-content:space-around'><img style='width:25px; margin-right: 10px;' src="https://yerevan-newpopup.netlify.app/img/{category_name}.png"/><p>{category_name}</p></div></li>
        <li><div style='margin: 0; justify-content:space-around'><img style='width:25px; margin-right: 10px;' src="https://yerevan-newpopup.netlify.app/img/location.png"/><p>{address_name}</p></div></li>
        <li style='display:flex; justify-content:end; margin-top:20px; margin-top:20px;'>
        <div style='width:64px; display:flex; justify-content:space-around;'>
          <a href="https://www.google.com/maps/place/{latitude}, {longitude}"><img style='width:25px;' src="https://yerevan-newpopup.netlify.app/img/google-maps.png"/></a>
          <a href="https://yandex.ru/maps/?pt={longitude},{latitude}&z=18"><img style='width:26px;' src="https://yerevan-newpopup.netlify.app/img/yandex-map.png"/></a>
        </div>
        </li>
        </ul>`,
    },
    renderer: render2d,
  });
  const eventsFeatureLayer = new FeatureLayer({
    //url: "https://services4.arcgis.com/XZEtqni2CM1tP1ZM/arcgis/rest/services/events1/FeatureServer",
    url: "https://services4.arcgis.com/XZEtqni2CM1tP1ZM/arcgis/rest/services/events2/FeatureServer",
    renderer: renderEvents,
    popupTemplate: {
      title: "{name}",
      content: `<ul id="eventsPopup">
        <li><div style='margin: 0; justify-content:space-around'><img style='width:25px; margin-right: 10px;' src="https://yerevan-newpopup.netlify.app/img/event.png"/><a href="{link}">More info</a></div></li>
        <li><div style='margin: 0; justify-content:space-around'><img style='width:25px; margin-right: 10px;' src="https://yerevan-newpopup.netlify.app/img/location.png"/><p>{address}</p></div></li>
        <li>
        <div>
          <a href="{link}"><img style="width:230px;"src="{image-url}"/></a>
       </div></li>
        <li style='display:flex; justify-content:end; margin-top:20px; margin-top:20px;'>
        <div style='width:64px; display:flex; justify-content:space-around;'>
          <a href="https://www.google.com/maps/place/{y}, {x}"><img style='width:25px;' src="https://yerevan-newpopup.netlify.app/img/google-maps.png"/></a>
          <a href="https://yandex.ru/maps/?pt={x},{y}&z=18"><img style='width:26px;' src="https://yerevan-newpopup.netlify.app/img/yandex-map.png"/></a>
        </div>
        </li>
        </ul>`,
    },
  });
  const sceneLayer = new SceneLayer({
    portalItem: {
      id: "ca0470dbbddb4db28bad74ed39949e25",
    },
    renderer: {
      type: "simple",
      symbol: {
        type: "mesh-3d",
        symbolLayers: [
          {
            type: "fill",
            material: {
              color: [204, 202, 202, 0.76],
              colorMixMode: "replace",
            },
            edges: {
              type: "sketch",
              color: [255, 255, 255],
              size: 1,
              extensionLength: 2,
            },
          },
        ],
      },
    },
    popupEnabled: false,
  });

  let appConfig = {
    mapView: null,
    sceneView: null,
    activeView: null,
    container: "map",
  };

  let initialViewParams = {
    zoom: 15,
    center: [44.51505334, 40.17958471],
    //center: [44.52117495, 40.14966581], 
    container: appConfig.container,
  };

  let map = new Map({
    basemap: "osm",
  });

  let btnWrapper = document.getElementById("changeBaseMap");
  //console.log(btnWrapper.children[0]);
  btnWrapper.children[0].addEventListener("click", () => {
    map.basemap = "osm";
  });
  btnWrapper.children[2].addEventListener("click", () => {
    map.basemap = "satellite";
  });
  appConfig.mapView = createView(initialViewParams, "2d");
  appConfig.mapView.map = map;
  appConfig.activeView = appConfig.mapView;

  initialViewParams.map = map;
  appConfig.sceneView = createView(initialViewParams, "3d");
  document
    .getElementById("changeMap")
    .children[0].addEventListener("click", (e) => {
      //console.log(e.target);
      //console.log(document.getElementById("changeMap").children[1].textContent);
      //console.log(switchButton.value)
      if(switchButton.value === "3D"){
        switchButton.click();
      }
      
      //if(document.getElementById("changeMap").children[1].textContent === "3D"){ switchButton.click() }   
    });
  document
    .getElementById("changeMap")
    .children[2].addEventListener("click", (e) => {
      //console.log(e.target);
      //switchButton.click();
      //f(document.getElementById("changeMap").children[1].textContent === "2D"){ switchButton.click() }
      if(switchButton.value === "2D"){
        switchButton.click();
      }
    });
  switchButton.addEventListener("click", function () {
    switchView();
  });

  function switchView() {
    let is3D = appConfig.activeView.type === "3d";
    let activeViewpoint = appConfig.activeView.viewpoint.clone();
    //console.log(activeViewpoint)
    appConfig.activeView.container = null;
    //let camera = activeViewpoint.camera && ;
    //activeViewpoint.camera ? appConfig.sceneView.viewpoint.camera = activeViewpoint.camera: appConfig.sceneView.viewpoint.camera.tilt = 20;
    //console.log(camera)
    if (is3D) {
      //console.log(eventsFeatureLayer);
      //console.log(activeViewpoint);
      //camera = activeViewpoint.camera;
      //console.log(camera);
      featureLayer.renderer = render2d;
      eventsFeatureLayer.renderer = renderEvents;
      appConfig.mapView.map.layers = [featureLayer, eventsFeatureLayer];
      //console.log(appConfig.mapView.map);
      appConfig.mapView.viewpoint = activeViewpoint;
      appConfig.mapView.container = appConfig.container;
      appConfig.activeView = appConfig.mapView;
      switchButton.value = "3D";
      //console.log(activeViewpoint.position)
      // activeViewpoint.camera = {
      //   //position: [44.50577257, 40.16007142, 1951.83786],
      //   position: [activeViewpoint.targetGeometry.x, activeViewpoint.targetGeometry.y, 6269.31775],
      //   heading: 16.01,
      //   tilt: 51.59,
      // }
      //console.log(activeViewpoint)
    } else {
      //console.log(camera);
      // console.log(activeViewpoint)
      //console.log(eventsFeatureLayer);
      // console.log(activeViewpoint.targetGeometry, activeViewpoint.targetGeometry.latitude, activeViewpoint.targetGeometry.longitude)
      // activeViewpoint.camera = {
      //   position: [
      //     // 44.52117495,
      //     // 40.14966581,
      //     activeViewpoint.targetGeometry.longitude,
      //     activeViewpoint.targetGeometry.latitude,
      //     5276.87830
      //   ],
      //   spatialReference: {
      //     wkid: 3857
      //   },
      //   heading: 352.26,
      //   tilt: 39.60
      // }
      //console.log(activeViewpoint)
      // activeViewpoint.camera = {
      //   position: [
      //     //activeViewpoint.targetGeometry.longitude,
      //     appConfig.activeView.center.longitude - 0.002,
      //     //activeViewpoint.targetGeometry.latitude,
      //     appConfig.activeView.center.latitude - 0.02,
      //     5276.87830
      //   ],
      //   heading: 352.26,
      //   tilt: 39.60
      // }
      featureLayer.renderer = render3d;
      eventsFeatureLayer.renderer = renderEvents3d;
      appConfig.sceneView.map.layers = [
        featureLayer,
        eventsFeatureLayer,
        sceneLayer,
      ];
      //console.log(appConfig.activeView.center)
      appConfig.sceneView.viewpoint = activeViewpoint;    
      //console.log(activeViewpoint);
      //console.log(appConfig.sceneView.viewpoint);
      appConfig.sceneView.container = appConfig.container;
      appConfig.activeView = appConfig.sceneView;
      //console.log(appConfig.activeView);
      switchButton.value = "2D";
      //activeViewpoint.camera = camera;
      // appConfig.activeView.camera = {
      //   position: [
      //     //activeViewpoint.targetGeometry.longitude,
      //     appConfig.activeView.center.longitude,
      //     //activeViewpoint.targetGeometry.latitude,
      //     appConfig.activeView.center.latitude,
      //     //5276.87830
      //   ],
      //   heading: 352.26,
      //   tilt: 39.60
      // }

    }
  }

  function createView(params, type) {
    let view;
    let is2D = type === "2d";

    if (is2D) {
      view = new MapView(params);
      view.constraints = {
        rotationEnabled: false
      }
      return view;
    } else {
      view = new SceneView(params);

      view.camera = {
        // position: [44.50577257, 40.16007142, 2000],
        // heading: 16.01,
        // tilt: 51.59,
        position: [44.51505334, 40.17958471, 6269.31775],
        // heading: 44.23,
        // tilt: 0.50
        heading: 40.89,
        tilt: 44.72,
      };
    }
    return view;
  }

  /*button logic */
  featureLayer.definitionExpression = `category_name = '' `;
  eventsFeatureLayer.definitionExpression = `OBJECTID = '' `;

  window.onload = () => {
    document.getElementById("mystyle1").click();
    document.getElementById("mystyle2").click();
    switchButton.click();
  };
  let menuDiv = document.getElementById("menu");
  let menuChildren = [];
  for (let i = 0; i < menuDiv.children.length; i++) {
    menuChildren.push(menuDiv.children[i]);
  }
  let menuItems = [];
  menuChildren.forEach((item) => {
    for (let i = 0; i < item.children[1].children.length; i++) {
      menuItems.push(item.children[1].children[i]);
    }
  });

  menuItems.forEach((items) => {
    items.addEventListener("click", () => {
      if (!items.classList.contains("mystyle")) {
        items.classList.add("mystyle");
        let categoryName = items.children[0]["alt"];
        featureLayer.definitionExpression += `OR category_name = '${categoryName}' `;
      } else {
        items.classList.remove("mystyle");
        let categoryName = items.children[0]["alt"];
        let removeCategory = `OR category_name = '${categoryName}'`;
        let start = featureLayer.definitionExpression.indexOf(removeCategory),
          end = removeCategory.length;
        let expression = featureLayer.definitionExpression;
        featureLayer.definitionExpression =
          expression.slice(0, start) + expression.slice(start + end + 1);
      }
    });
  });

  let eventBtn = document.getElementById("eventBtn");
  eventBtn.addEventListener("click", (e) => {
    //console.log(e.target)
    let items = e.target;
    if (!items.classList.contains("mystyle1")) {
      items.classList.add("mystyle1");
      eventsFeatureLayer.definitionExpression = `OBJECTID < 100 `;
    } else {
      items.classList.remove("mystyle1");
      eventsFeatureLayer.definitionExpression = `OBJECTID = '' `;
    }
  });
});
