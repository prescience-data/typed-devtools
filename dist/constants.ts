import * as Protocol from "./types"

export const Accessibility: Protocol.AccessibilityDomain = {
  disable: "Accessibility.disable",
  enable: "Accessibility.enable",
  getPartialAXTree: "Accessibility.getPartialAXTree",
  getFullAXTree: "Accessibility.getFullAXTree",
  getRootAXNode: "Accessibility.getRootAXNode",
  getAXNodeAndAncestors: "Accessibility.getAXNodeAndAncestors",
  getChildAXNodes: "Accessibility.getChildAXNodes",
  queryAXTree: "Accessibility.queryAXTree",
  loadComplete: "Accessibility.loadComplete",
  nodesUpdated: "Accessibility.nodesUpdated"
}

export const Animation: Protocol.AnimationDomain = {
  disable: "Animation.disable",
  enable: "Animation.enable",
  getCurrentTime: "Animation.getCurrentTime",
  getPlaybackRate: "Animation.getPlaybackRate",
  releaseAnimations: "Animation.releaseAnimations",
  resolveAnimation: "Animation.resolveAnimation",
  seekAnimations: "Animation.seekAnimations",
  setPaused: "Animation.setPaused",
  setPlaybackRate: "Animation.setPlaybackRate",
  setTiming: "Animation.setTiming",
  animationCanceled: "Animation.animationCanceled",
  animationCreated: "Animation.animationCreated",
  animationStarted: "Animation.animationStarted"
}

export const Audits: Protocol.AuditsDomain = {
  getEncodedResponse: "Audits.getEncodedResponse",
  disable: "Audits.disable",
  enable: "Audits.enable",
  checkContrast: "Audits.checkContrast",
  issueAdded: "Audits.issueAdded"
}

export const BackgroundService: Protocol.BackgroundServiceDomain = {
  startObserving: "BackgroundService.startObserving",
  stopObserving: "BackgroundService.stopObserving",
  setRecording: "BackgroundService.setRecording",
  clearEvents: "BackgroundService.clearEvents",
  recordingStateChanged: "BackgroundService.recordingStateChanged",
  backgroundServiceEventReceived:
    "BackgroundService.backgroundServiceEventReceived"
}

export const Browser: Protocol.BrowserDomain = {
  setPermission: "Browser.setPermission",
  grantPermissions: "Browser.grantPermissions",
  resetPermissions: "Browser.resetPermissions",
  setDownloadBehavior: "Browser.setDownloadBehavior",
  cancelDownload: "Browser.cancelDownload",
  close: "Browser.close",
  crash: "Browser.crash",
  crashGpuProcess: "Browser.crashGpuProcess",
  getVersion: "Browser.getVersion",
  getBrowserCommandLine: "Browser.getBrowserCommandLine",
  getHistograms: "Browser.getHistograms",
  getHistogram: "Browser.getHistogram",
  getWindowBounds: "Browser.getWindowBounds",
  getWindowForTarget: "Browser.getWindowForTarget",
  setWindowBounds: "Browser.setWindowBounds",
  setDockTile: "Browser.setDockTile",
  executeBrowserCommand: "Browser.executeBrowserCommand",
  downloadWillBegin: "Browser.downloadWillBegin",
  downloadProgress: "Browser.downloadProgress"
}

export const CSS: Protocol.CSSDomain = {
  addRule: "CSS.addRule",
  collectClassNames: "CSS.collectClassNames",
  createStyleSheet: "CSS.createStyleSheet",
  disable: "CSS.disable",
  enable: "CSS.enable",
  forcePseudoState: "CSS.forcePseudoState",
  getBackgroundColors: "CSS.getBackgroundColors",
  getComputedStyleForNode: "CSS.getComputedStyleForNode",
  getInlineStylesForNode: "CSS.getInlineStylesForNode",
  getMatchedStylesForNode: "CSS.getMatchedStylesForNode",
  getMediaQueries: "CSS.getMediaQueries",
  getPlatformFontsForNode: "CSS.getPlatformFontsForNode",
  getStyleSheetText: "CSS.getStyleSheetText",
  trackComputedStyleUpdates: "CSS.trackComputedStyleUpdates",
  takeComputedStyleUpdates: "CSS.takeComputedStyleUpdates",
  setEffectivePropertyValueForNode: "CSS.setEffectivePropertyValueForNode",
  setKeyframeKey: "CSS.setKeyframeKey",
  setMediaText: "CSS.setMediaText",
  setContainerQueryText: "CSS.setContainerQueryText",
  setRuleSelector: "CSS.setRuleSelector",
  setStyleSheetText: "CSS.setStyleSheetText",
  setStyleTexts: "CSS.setStyleTexts",
  startRuleUsageTracking: "CSS.startRuleUsageTracking",
  stopRuleUsageTracking: "CSS.stopRuleUsageTracking",
  takeCoverageDelta: "CSS.takeCoverageDelta",
  setLocalFontsEnabled: "CSS.setLocalFontsEnabled",
  fontsUpdated: "CSS.fontsUpdated",
  mediaQueryResultChanged: "CSS.mediaQueryResultChanged",
  styleSheetAdded: "CSS.styleSheetAdded",
  styleSheetChanged: "CSS.styleSheetChanged",
  styleSheetRemoved: "CSS.styleSheetRemoved"
}

export const CacheStorage: Protocol.CacheStorageDomain = {
  deleteCache: "CacheStorage.deleteCache",
  deleteEntry: "CacheStorage.deleteEntry",
  requestCacheNames: "CacheStorage.requestCacheNames",
  requestCachedResponse: "CacheStorage.requestCachedResponse",
  requestEntries: "CacheStorage.requestEntries"
}

export const Cast: Protocol.CastDomain = {
  enable: "Cast.enable",
  disable: "Cast.disable",
  setSinkToUse: "Cast.setSinkToUse",
  startTabMirroring: "Cast.startTabMirroring",
  stopCasting: "Cast.stopCasting",
  sinksUpdated: "Cast.sinksUpdated",
  issueUpdated: "Cast.issueUpdated"
}

export const DOM: Protocol.DOMDomain = {
  collectClassNamesFromSubtree: "DOM.collectClassNamesFromSubtree",
  copyTo: "DOM.copyTo",
  describeNode: "DOM.describeNode",
  scrollIntoViewIfNeeded: "DOM.scrollIntoViewIfNeeded",
  disable: "DOM.disable",
  discardSearchResults: "DOM.discardSearchResults",
  enable: "DOM.enable",
  focus: "DOM.focus",
  getAttributes: "DOM.getAttributes",
  getBoxModel: "DOM.getBoxModel",
  getContentQuads: "DOM.getContentQuads",
  getDocument: "DOM.getDocument",
  getFlattenedDocument: "DOM.getFlattenedDocument",
  getNodesForSubtreeByStyle: "DOM.getNodesForSubtreeByStyle",
  getNodeForLocation: "DOM.getNodeForLocation",
  getOuterHTML: "DOM.getOuterHTML",
  getRelayoutBoundary: "DOM.getRelayoutBoundary",
  getSearchResults: "DOM.getSearchResults",
  hideHighlight: "DOM.hideHighlight",
  highlightNode: "DOM.highlightNode",
  highlightRect: "DOM.highlightRect",
  markUndoableState: "DOM.markUndoableState",
  moveTo: "DOM.moveTo",
  performSearch: "DOM.performSearch",
  pushNodeByPathToFrontend: "DOM.pushNodeByPathToFrontend",
  pushNodesByBackendIdsToFrontend: "DOM.pushNodesByBackendIdsToFrontend",
  querySelector: "DOM.querySelector",
  querySelectorAll: "DOM.querySelectorAll",
  redo: "DOM.redo",
  removeAttribute: "DOM.removeAttribute",
  removeNode: "DOM.removeNode",
  requestChildNodes: "DOM.requestChildNodes",
  requestNode: "DOM.requestNode",
  resolveNode: "DOM.resolveNode",
  setAttributeValue: "DOM.setAttributeValue",
  setAttributesAsText: "DOM.setAttributesAsText",
  setFileInputFiles: "DOM.setFileInputFiles",
  setNodeStackTracesEnabled: "DOM.setNodeStackTracesEnabled",
  getNodeStackTraces: "DOM.getNodeStackTraces",
  getFileInfo: "DOM.getFileInfo",
  setInspectedNode: "DOM.setInspectedNode",
  setNodeName: "DOM.setNodeName",
  setNodeValue: "DOM.setNodeValue",
  setOuterHTML: "DOM.setOuterHTML",
  undo: "DOM.undo",
  getFrameOwner: "DOM.getFrameOwner",
  getContainerForNode: "DOM.getContainerForNode",
  getQueryingDescendantsForContainer: "DOM.getQueryingDescendantsForContainer",
  attributeModified: "DOM.attributeModified",
  attributeRemoved: "DOM.attributeRemoved",
  characterDataModified: "DOM.characterDataModified",
  childNodeCountUpdated: "DOM.childNodeCountUpdated",
  childNodeInserted: "DOM.childNodeInserted",
  childNodeRemoved: "DOM.childNodeRemoved",
  distributedNodesUpdated: "DOM.distributedNodesUpdated",
  documentUpdated: "DOM.documentUpdated",
  inlineStyleInvalidated: "DOM.inlineStyleInvalidated",
  pseudoElementAdded: "DOM.pseudoElementAdded",
  pseudoElementRemoved: "DOM.pseudoElementRemoved",
  setChildNodes: "DOM.setChildNodes",
  shadowRootPopped: "DOM.shadowRootPopped",
  shadowRootPushed: "DOM.shadowRootPushed"
}

export const DOMDebugger: Protocol.DOMDebuggerDomain = {
  getEventListeners: "DOMDebugger.getEventListeners",
  removeDOMBreakpoint: "DOMDebugger.removeDOMBreakpoint",
  removeEventListenerBreakpoint: "DOMDebugger.removeEventListenerBreakpoint",
  removeInstrumentationBreakpoint:
    "DOMDebugger.removeInstrumentationBreakpoint",
  removeXHRBreakpoint: "DOMDebugger.removeXHRBreakpoint",
  setBreakOnCSPViolation: "DOMDebugger.setBreakOnCSPViolation",
  setDOMBreakpoint: "DOMDebugger.setDOMBreakpoint",
  setEventListenerBreakpoint: "DOMDebugger.setEventListenerBreakpoint",
  setInstrumentationBreakpoint: "DOMDebugger.setInstrumentationBreakpoint",
  setXHRBreakpoint: "DOMDebugger.setXHRBreakpoint"
}

export const EventBreakpoints: Protocol.EventBreakpointsDomain = {
  setInstrumentationBreakpoint: "EventBreakpoints.setInstrumentationBreakpoint",
  removeInstrumentationBreakpoint:
    "EventBreakpoints.removeInstrumentationBreakpoint"
}

export const DOMSnapshot: Protocol.DOMSnapshotDomain = {
  disable: "DOMSnapshot.disable",
  enable: "DOMSnapshot.enable",
  getSnapshot: "DOMSnapshot.getSnapshot",
  captureSnapshot: "DOMSnapshot.captureSnapshot"
}

export const DOMStorage: Protocol.DOMStorageDomain = {
  clear: "DOMStorage.clear",
  disable: "DOMStorage.disable",
  enable: "DOMStorage.enable",
  getDOMStorageItems: "DOMStorage.getDOMStorageItems",
  removeDOMStorageItem: "DOMStorage.removeDOMStorageItem",
  setDOMStorageItem: "DOMStorage.setDOMStorageItem",
  domStorageItemAdded: "DOMStorage.domStorageItemAdded",
  domStorageItemRemoved: "DOMStorage.domStorageItemRemoved",
  domStorageItemUpdated: "DOMStorage.domStorageItemUpdated",
  domStorageItemsCleared: "DOMStorage.domStorageItemsCleared"
}

export const Database: Protocol.DatabaseDomain = {
  disable: "Database.disable",
  enable: "Database.enable",
  executeSQL: "Database.executeSQL",
  getDatabaseTableNames: "Database.getDatabaseTableNames",
  addDatabase: "Database.addDatabase"
}

export const DeviceOrientation: Protocol.DeviceOrientationDomain = {
  clearDeviceOrientationOverride:
    "DeviceOrientation.clearDeviceOrientationOverride",
  setDeviceOrientationOverride: "DeviceOrientation.setDeviceOrientationOverride"
}

export const Emulation: Protocol.EmulationDomain = {
  canEmulate: "Emulation.canEmulate",
  clearDeviceMetricsOverride: "Emulation.clearDeviceMetricsOverride",
  clearGeolocationOverride: "Emulation.clearGeolocationOverride",
  resetPageScaleFactor: "Emulation.resetPageScaleFactor",
  setFocusEmulationEnabled: "Emulation.setFocusEmulationEnabled",
  setAutoDarkModeOverride: "Emulation.setAutoDarkModeOverride",
  setCPUThrottlingRate: "Emulation.setCPUThrottlingRate",
  setDefaultBackgroundColorOverride:
    "Emulation.setDefaultBackgroundColorOverride",
  setDeviceMetricsOverride: "Emulation.setDeviceMetricsOverride",
  setScrollbarsHidden: "Emulation.setScrollbarsHidden",
  setDocumentCookieDisabled: "Emulation.setDocumentCookieDisabled",
  setEmitTouchEventsForMouse: "Emulation.setEmitTouchEventsForMouse",
  setEmulatedMedia: "Emulation.setEmulatedMedia",
  setEmulatedVisionDeficiency: "Emulation.setEmulatedVisionDeficiency",
  setGeolocationOverride: "Emulation.setGeolocationOverride",
  setIdleOverride: "Emulation.setIdleOverride",
  clearIdleOverride: "Emulation.clearIdleOverride",
  setNavigatorOverrides: "Emulation.setNavigatorOverrides",
  setPageScaleFactor: "Emulation.setPageScaleFactor",
  setScriptExecutionDisabled: "Emulation.setScriptExecutionDisabled",
  setTouchEmulationEnabled: "Emulation.setTouchEmulationEnabled",
  setVirtualTimePolicy: "Emulation.setVirtualTimePolicy",
  setLocaleOverride: "Emulation.setLocaleOverride",
  setTimezoneOverride: "Emulation.setTimezoneOverride",
  setVisibleSize: "Emulation.setVisibleSize",
  setDisabledImageTypes: "Emulation.setDisabledImageTypes",
  setUserAgentOverride: "Emulation.setUserAgentOverride",
  virtualTimeBudgetExpired: "Emulation.virtualTimeBudgetExpired"
}

export const HeadlessExperimental: Protocol.HeadlessExperimentalDomain = {
  beginFrame: "HeadlessExperimental.beginFrame",
  disable: "HeadlessExperimental.disable",
  enable: "HeadlessExperimental.enable",
  needsBeginFramesChanged: "HeadlessExperimental.needsBeginFramesChanged"
}

export const IO: Protocol.IODomain = {
  close: "IO.close",
  read: "IO.read",
  resolveBlob: "IO.resolveBlob"
}

export const IndexedDB: Protocol.IndexedDBDomain = {
  clearObjectStore: "IndexedDB.clearObjectStore",
  deleteDatabase: "IndexedDB.deleteDatabase",
  deleteObjectStoreEntries: "IndexedDB.deleteObjectStoreEntries",
  disable: "IndexedDB.disable",
  enable: "IndexedDB.enable",
  requestData: "IndexedDB.requestData",
  getMetadata: "IndexedDB.getMetadata",
  requestDatabase: "IndexedDB.requestDatabase",
  requestDatabaseNames: "IndexedDB.requestDatabaseNames"
}

export const Input: Protocol.InputDomain = {
  dispatchDragEvent: "Input.dispatchDragEvent",
  dispatchKeyEvent: "Input.dispatchKeyEvent",
  insertText: "Input.insertText",
  imeSetComposition: "Input.imeSetComposition",
  dispatchMouseEvent: "Input.dispatchMouseEvent",
  dispatchTouchEvent: "Input.dispatchTouchEvent",
  emulateTouchFromMouseEvent: "Input.emulateTouchFromMouseEvent",
  setIgnoreInputEvents: "Input.setIgnoreInputEvents",
  setInterceptDrags: "Input.setInterceptDrags",
  synthesizePinchGesture: "Input.synthesizePinchGesture",
  synthesizeScrollGesture: "Input.synthesizeScrollGesture",
  synthesizeTapGesture: "Input.synthesizeTapGesture",
  dragIntercepted: "Input.dragIntercepted"
}

export const Inspector: Protocol.InspectorDomain = {
  disable: "Inspector.disable",
  enable: "Inspector.enable",
  detached: "Inspector.detached",
  targetCrashed: "Inspector.targetCrashed",
  targetReloadedAfterCrash: "Inspector.targetReloadedAfterCrash"
}

export const LayerTree: Protocol.LayerTreeDomain = {
  compositingReasons: "LayerTree.compositingReasons",
  disable: "LayerTree.disable",
  enable: "LayerTree.enable",
  loadSnapshot: "LayerTree.loadSnapshot",
  makeSnapshot: "LayerTree.makeSnapshot",
  profileSnapshot: "LayerTree.profileSnapshot",
  releaseSnapshot: "LayerTree.releaseSnapshot",
  replaySnapshot: "LayerTree.replaySnapshot",
  snapshotCommandLog: "LayerTree.snapshotCommandLog",
  layerPainted: "LayerTree.layerPainted",
  layerTreeDidChange: "LayerTree.layerTreeDidChange"
}

export const Log: Protocol.LogDomain = {
  clear: "Log.clear",
  disable: "Log.disable",
  enable: "Log.enable",
  startViolationsReport: "Log.startViolationsReport",
  stopViolationsReport: "Log.stopViolationsReport",
  entryAdded: "Log.entryAdded"
}

export const Memory: Protocol.MemoryDomain = {
  getDOMCounters: "Memory.getDOMCounters",
  prepareForLeakDetection: "Memory.prepareForLeakDetection",
  forciblyPurgeJavaScriptMemory: "Memory.forciblyPurgeJavaScriptMemory",
  setPressureNotificationsSuppressed:
    "Memory.setPressureNotificationsSuppressed",
  simulatePressureNotification: "Memory.simulatePressureNotification",
  startSampling: "Memory.startSampling",
  stopSampling: "Memory.stopSampling",
  getAllTimeSamplingProfile: "Memory.getAllTimeSamplingProfile",
  getBrowserSamplingProfile: "Memory.getBrowserSamplingProfile",
  getSamplingProfile: "Memory.getSamplingProfile"
}

export const Network: Protocol.NetworkDomain = {
  setAcceptedEncodings: "Network.setAcceptedEncodings",
  clearAcceptedEncodingsOverride: "Network.clearAcceptedEncodingsOverride",
  canClearBrowserCache: "Network.canClearBrowserCache",
  canClearBrowserCookies: "Network.canClearBrowserCookies",
  canEmulateNetworkConditions: "Network.canEmulateNetworkConditions",
  clearBrowserCache: "Network.clearBrowserCache",
  clearBrowserCookies: "Network.clearBrowserCookies",
  continueInterceptedRequest: "Network.continueInterceptedRequest",
  deleteCookies: "Network.deleteCookies",
  disable: "Network.disable",
  emulateNetworkConditions: "Network.emulateNetworkConditions",
  enable: "Network.enable",
  getAllCookies: "Network.getAllCookies",
  getCertificate: "Network.getCertificate",
  getCookies: "Network.getCookies",
  getResponseBody: "Network.getResponseBody",
  getRequestPostData: "Network.getRequestPostData",
  getResponseBodyForInterception: "Network.getResponseBodyForInterception",
  takeResponseBodyForInterceptionAsStream:
    "Network.takeResponseBodyForInterceptionAsStream",
  replayXHR: "Network.replayXHR",
  searchInResponseBody: "Network.searchInResponseBody",
  setBlockedURLs: "Network.setBlockedURLs",
  setBypassServiceWorker: "Network.setBypassServiceWorker",
  setCacheDisabled: "Network.setCacheDisabled",
  setCookie: "Network.setCookie",
  setCookies: "Network.setCookies",
  setExtraHTTPHeaders: "Network.setExtraHTTPHeaders",
  setAttachDebugStack: "Network.setAttachDebugStack",
  setRequestInterception: "Network.setRequestInterception",
  setUserAgentOverride: "Network.setUserAgentOverride",
  getSecurityIsolationStatus: "Network.getSecurityIsolationStatus",
  enableReportingApi: "Network.enableReportingApi",
  loadNetworkResource: "Network.loadNetworkResource",
  dataReceived: "Network.dataReceived",
  eventSourceMessageReceived: "Network.eventSourceMessageReceived",
  loadingFailed: "Network.loadingFailed",
  loadingFinished: "Network.loadingFinished",
  requestIntercepted: "Network.requestIntercepted",
  requestServedFromCache: "Network.requestServedFromCache",
  requestWillBeSent: "Network.requestWillBeSent",
  resourceChangedPriority: "Network.resourceChangedPriority",
  signedExchangeReceived: "Network.signedExchangeReceived",
  responseReceived: "Network.responseReceived",
  webSocketClosed: "Network.webSocketClosed",
  webSocketCreated: "Network.webSocketCreated",
  webSocketFrameError: "Network.webSocketFrameError",
  webSocketFrameReceived: "Network.webSocketFrameReceived",
  webSocketFrameSent: "Network.webSocketFrameSent",
  webSocketHandshakeResponseReceived:
    "Network.webSocketHandshakeResponseReceived",
  webSocketWillSendHandshakeRequest:
    "Network.webSocketWillSendHandshakeRequest",
  webTransportCreated: "Network.webTransportCreated",
  webTransportConnectionEstablished:
    "Network.webTransportConnectionEstablished",
  webTransportClosed: "Network.webTransportClosed",
  requestWillBeSentExtraInfo: "Network.requestWillBeSentExtraInfo",
  responseReceivedExtraInfo: "Network.responseReceivedExtraInfo",
  trustTokenOperationDone: "Network.trustTokenOperationDone",
  subresourceWebBundleMetadataReceived:
    "Network.subresourceWebBundleMetadataReceived",
  subresourceWebBundleMetadataError:
    "Network.subresourceWebBundleMetadataError",
  subresourceWebBundleInnerResponseParsed:
    "Network.subresourceWebBundleInnerResponseParsed",
  subresourceWebBundleInnerResponseError:
    "Network.subresourceWebBundleInnerResponseError",
  reportingApiReportAdded: "Network.reportingApiReportAdded",
  reportingApiReportUpdated: "Network.reportingApiReportUpdated",
  reportingApiEndpointsChangedForOrigin:
    "Network.reportingApiEndpointsChangedForOrigin"
}

export const Overlay: Protocol.OverlayDomain = {
  disable: "Overlay.disable",
  enable: "Overlay.enable",
  getHighlightObjectForTest: "Overlay.getHighlightObjectForTest",
  getGridHighlightObjectsForTest: "Overlay.getGridHighlightObjectsForTest",
  getSourceOrderHighlightObjectForTest:
    "Overlay.getSourceOrderHighlightObjectForTest",
  hideHighlight: "Overlay.hideHighlight",
  highlightFrame: "Overlay.highlightFrame",
  highlightNode: "Overlay.highlightNode",
  highlightQuad: "Overlay.highlightQuad",
  highlightRect: "Overlay.highlightRect",
  highlightSourceOrder: "Overlay.highlightSourceOrder",
  setInspectMode: "Overlay.setInspectMode",
  setShowAdHighlights: "Overlay.setShowAdHighlights",
  setPausedInDebuggerMessage: "Overlay.setPausedInDebuggerMessage",
  setShowDebugBorders: "Overlay.setShowDebugBorders",
  setShowFPSCounter: "Overlay.setShowFPSCounter",
  setShowGridOverlays: "Overlay.setShowGridOverlays",
  setShowFlexOverlays: "Overlay.setShowFlexOverlays",
  setShowScrollSnapOverlays: "Overlay.setShowScrollSnapOverlays",
  setShowContainerQueryOverlays: "Overlay.setShowContainerQueryOverlays",
  setShowPaintRects: "Overlay.setShowPaintRects",
  setShowLayoutShiftRegions: "Overlay.setShowLayoutShiftRegions",
  setShowScrollBottleneckRects: "Overlay.setShowScrollBottleneckRects",
  setShowHitTestBorders: "Overlay.setShowHitTestBorders",
  setShowWebVitals: "Overlay.setShowWebVitals",
  setShowViewportSizeOnResize: "Overlay.setShowViewportSizeOnResize",
  setShowHinge: "Overlay.setShowHinge",
  setShowIsolatedElements: "Overlay.setShowIsolatedElements",
  inspectNodeRequested: "Overlay.inspectNodeRequested",
  nodeHighlightRequested: "Overlay.nodeHighlightRequested",
  screenshotRequested: "Overlay.screenshotRequested",
  inspectModeCanceled: "Overlay.inspectModeCanceled"
}

export const Page: Protocol.PageDomain = {
  addScriptToEvaluateOnLoad: "Page.addScriptToEvaluateOnLoad",
  addScriptToEvaluateOnNewDocument: "Page.addScriptToEvaluateOnNewDocument",
  bringToFront: "Page.bringToFront",
  captureScreenshot: "Page.captureScreenshot",
  captureSnapshot: "Page.captureSnapshot",
  clearDeviceMetricsOverride: "Page.clearDeviceMetricsOverride",
  clearDeviceOrientationOverride: "Page.clearDeviceOrientationOverride",
  clearGeolocationOverride: "Page.clearGeolocationOverride",
  createIsolatedWorld: "Page.createIsolatedWorld",
  deleteCookie: "Page.deleteCookie",
  disable: "Page.disable",
  enable: "Page.enable",
  getAppManifest: "Page.getAppManifest",
  getInstallabilityErrors: "Page.getInstallabilityErrors",
  getManifestIcons: "Page.getManifestIcons",
  getAppId: "Page.getAppId",
  getCookies: "Page.getCookies",
  getFrameTree: "Page.getFrameTree",
  getLayoutMetrics: "Page.getLayoutMetrics",
  getNavigationHistory: "Page.getNavigationHistory",
  resetNavigationHistory: "Page.resetNavigationHistory",
  getResourceContent: "Page.getResourceContent",
  getResourceTree: "Page.getResourceTree",
  handleJavaScriptDialog: "Page.handleJavaScriptDialog",
  navigate: "Page.navigate",
  navigateToHistoryEntry: "Page.navigateToHistoryEntry",
  printToPDF: "Page.printToPDF",
  reload: "Page.reload",
  removeScriptToEvaluateOnLoad: "Page.removeScriptToEvaluateOnLoad",
  removeScriptToEvaluateOnNewDocument:
    "Page.removeScriptToEvaluateOnNewDocument",
  screencastFrameAck: "Page.screencastFrameAck",
  searchInResource: "Page.searchInResource",
  setAdBlockingEnabled: "Page.setAdBlockingEnabled",
  setBypassCSP: "Page.setBypassCSP",
  getPermissionsPolicyState: "Page.getPermissionsPolicyState",
  getOriginTrials: "Page.getOriginTrials",
  setDeviceMetricsOverride: "Page.setDeviceMetricsOverride",
  setDeviceOrientationOverride: "Page.setDeviceOrientationOverride",
  setFontFamilies: "Page.setFontFamilies",
  setFontSizes: "Page.setFontSizes",
  setDocumentContent: "Page.setDocumentContent",
  setDownloadBehavior: "Page.setDownloadBehavior",
  setGeolocationOverride: "Page.setGeolocationOverride",
  setLifecycleEventsEnabled: "Page.setLifecycleEventsEnabled",
  setTouchEmulationEnabled: "Page.setTouchEmulationEnabled",
  startScreencast: "Page.startScreencast",
  stopLoading: "Page.stopLoading",
  crash: "Page.crash",
  close: "Page.close",
  setWebLifecycleState: "Page.setWebLifecycleState",
  stopScreencast: "Page.stopScreencast",
  produceCompilationCache: "Page.produceCompilationCache",
  addCompilationCache: "Page.addCompilationCache",
  clearCompilationCache: "Page.clearCompilationCache",
  setSPCTransactionMode: "Page.setSPCTransactionMode",
  generateTestReport: "Page.generateTestReport",
  waitForDebugger: "Page.waitForDebugger",
  setInterceptFileChooserDialog: "Page.setInterceptFileChooserDialog",
  domContentEventFired: "Page.domContentEventFired",
  fileChooserOpened: "Page.fileChooserOpened",
  frameAttached: "Page.frameAttached",
  frameClearedScheduledNavigation: "Page.frameClearedScheduledNavigation",
  frameDetached: "Page.frameDetached",
  frameNavigated: "Page.frameNavigated",
  documentOpened: "Page.documentOpened",
  frameResized: "Page.frameResized",
  frameRequestedNavigation: "Page.frameRequestedNavigation",
  frameScheduledNavigation: "Page.frameScheduledNavigation",
  frameStartedLoading: "Page.frameStartedLoading",
  frameStoppedLoading: "Page.frameStoppedLoading",
  downloadWillBegin: "Page.downloadWillBegin",
  downloadProgress: "Page.downloadProgress",
  interstitialHidden: "Page.interstitialHidden",
  interstitialShown: "Page.interstitialShown",
  javascriptDialogClosed: "Page.javascriptDialogClosed",
  javascriptDialogOpening: "Page.javascriptDialogOpening",
  lifecycleEvent: "Page.lifecycleEvent",
  backForwardCacheNotUsed: "Page.backForwardCacheNotUsed",
  loadEventFired: "Page.loadEventFired",
  navigatedWithinDocument: "Page.navigatedWithinDocument",
  screencastFrame: "Page.screencastFrame",
  screencastVisibilityChanged: "Page.screencastVisibilityChanged",
  windowOpen: "Page.windowOpen",
  compilationCacheProduced: "Page.compilationCacheProduced"
}

export const Performance: Protocol.PerformanceDomain = {
  disable: "Performance.disable",
  enable: "Performance.enable",
  setTimeDomain: "Performance.setTimeDomain",
  getMetrics: "Performance.getMetrics",
  metrics: "Performance.metrics"
}

export const PerformanceTimeline: Protocol.PerformanceTimelineDomain = {
  enable: "PerformanceTimeline.enable",
  timelineEventAdded: "PerformanceTimeline.timelineEventAdded"
}

export const Security: Protocol.SecurityDomain = {
  disable: "Security.disable",
  enable: "Security.enable",
  setIgnoreCertificateErrors: "Security.setIgnoreCertificateErrors",
  handleCertificateError: "Security.handleCertificateError",
  setOverrideCertificateErrors: "Security.setOverrideCertificateErrors",
  certificateError: "Security.certificateError",
  visibleSecurityStateChanged: "Security.visibleSecurityStateChanged",
  securityStateChanged: "Security.securityStateChanged"
}

export const ServiceWorker: Protocol.ServiceWorkerDomain = {
  deliverPushMessage: "ServiceWorker.deliverPushMessage",
  disable: "ServiceWorker.disable",
  dispatchSyncEvent: "ServiceWorker.dispatchSyncEvent",
  dispatchPeriodicSyncEvent: "ServiceWorker.dispatchPeriodicSyncEvent",
  enable: "ServiceWorker.enable",
  inspectWorker: "ServiceWorker.inspectWorker",
  setForceUpdateOnPageLoad: "ServiceWorker.setForceUpdateOnPageLoad",
  skipWaiting: "ServiceWorker.skipWaiting",
  startWorker: "ServiceWorker.startWorker",
  stopAllWorkers: "ServiceWorker.stopAllWorkers",
  stopWorker: "ServiceWorker.stopWorker",
  unregister: "ServiceWorker.unregister",
  updateRegistration: "ServiceWorker.updateRegistration",
  workerErrorReported: "ServiceWorker.workerErrorReported",
  workerRegistrationUpdated: "ServiceWorker.workerRegistrationUpdated",
  workerVersionUpdated: "ServiceWorker.workerVersionUpdated"
}

export const Storage: Protocol.StorageDomain = {
  clearDataForOrigin: "Storage.clearDataForOrigin",
  getCookies: "Storage.getCookies",
  setCookies: "Storage.setCookies",
  clearCookies: "Storage.clearCookies",
  getUsageAndQuota: "Storage.getUsageAndQuota",
  overrideQuotaForOrigin: "Storage.overrideQuotaForOrigin",
  trackCacheStorageForOrigin: "Storage.trackCacheStorageForOrigin",
  trackIndexedDBForOrigin: "Storage.trackIndexedDBForOrigin",
  untrackCacheStorageForOrigin: "Storage.untrackCacheStorageForOrigin",
  untrackIndexedDBForOrigin: "Storage.untrackIndexedDBForOrigin",
  getTrustTokens: "Storage.getTrustTokens",
  clearTrustTokens: "Storage.clearTrustTokens",
  cacheStorageContentUpdated: "Storage.cacheStorageContentUpdated",
  cacheStorageListUpdated: "Storage.cacheStorageListUpdated",
  indexedDBContentUpdated: "Storage.indexedDBContentUpdated",
  indexedDBListUpdated: "Storage.indexedDBListUpdated"
}

export const SystemInfo: Protocol.SystemInfoDomain = {
  getInfo: "SystemInfo.getInfo",
  getProcessInfo: "SystemInfo.getProcessInfo"
}

export const Target: Protocol.TargetDomain = {
  activateTarget: "Target.activateTarget",
  attachToTarget: "Target.attachToTarget",
  attachToBrowserTarget: "Target.attachToBrowserTarget",
  closeTarget: "Target.closeTarget",
  exposeDevToolsProtocol: "Target.exposeDevToolsProtocol",
  createBrowserContext: "Target.createBrowserContext",
  getBrowserContexts: "Target.getBrowserContexts",
  createTarget: "Target.createTarget",
  detachFromTarget: "Target.detachFromTarget",
  disposeBrowserContext: "Target.disposeBrowserContext",
  getTargetInfo: "Target.getTargetInfo",
  getTargets: "Target.getTargets",
  sendMessageToTarget: "Target.sendMessageToTarget",
  setAutoAttach: "Target.setAutoAttach",
  autoAttachRelated: "Target.autoAttachRelated",
  setDiscoverTargets: "Target.setDiscoverTargets",
  setRemoteLocations: "Target.setRemoteLocations",
  attachedToTarget: "Target.attachedToTarget",
  detachedFromTarget: "Target.detachedFromTarget",
  receivedMessageFromTarget: "Target.receivedMessageFromTarget",
  targetCreated: "Target.targetCreated",
  targetDestroyed: "Target.targetDestroyed",
  targetCrashed: "Target.targetCrashed",
  targetInfoChanged: "Target.targetInfoChanged"
}

export const Tethering: Protocol.TetheringDomain = {
  bind: "Tethering.bind",
  unbind: "Tethering.unbind",
  accepted: "Tethering.accepted"
}

export const Tracing: Protocol.TracingDomain = {
  end: "Tracing.end",
  getCategories: "Tracing.getCategories",
  recordClockSyncMarker: "Tracing.recordClockSyncMarker",
  requestMemoryDump: "Tracing.requestMemoryDump",
  start: "Tracing.start",
  bufferUsage: "Tracing.bufferUsage",
  dataCollected: "Tracing.dataCollected",
  tracingComplete: "Tracing.tracingComplete"
}

export const Fetch: Protocol.FetchDomain = {
  disable: "Fetch.disable",
  enable: "Fetch.enable",
  failRequest: "Fetch.failRequest",
  fulfillRequest: "Fetch.fulfillRequest",
  continueRequest: "Fetch.continueRequest",
  continueWithAuth: "Fetch.continueWithAuth",
  continueResponse: "Fetch.continueResponse",
  getResponseBody: "Fetch.getResponseBody",
  takeResponseBodyAsStream: "Fetch.takeResponseBodyAsStream",
  requestPaused: "Fetch.requestPaused",
  authRequired: "Fetch.authRequired"
}

export const WebAudio: Protocol.WebAudioDomain = {
  enable: "WebAudio.enable",
  disable: "WebAudio.disable",
  getRealtimeData: "WebAudio.getRealtimeData",
  contextCreated: "WebAudio.contextCreated",
  contextWillBeDestroyed: "WebAudio.contextWillBeDestroyed",
  contextChanged: "WebAudio.contextChanged",
  audioListenerCreated: "WebAudio.audioListenerCreated",
  audioListenerWillBeDestroyed: "WebAudio.audioListenerWillBeDestroyed",
  audioNodeCreated: "WebAudio.audioNodeCreated",
  audioNodeWillBeDestroyed: "WebAudio.audioNodeWillBeDestroyed",
  audioParamCreated: "WebAudio.audioParamCreated",
  audioParamWillBeDestroyed: "WebAudio.audioParamWillBeDestroyed",
  nodesConnected: "WebAudio.nodesConnected",
  nodesDisconnected: "WebAudio.nodesDisconnected",
  nodeParamConnected: "WebAudio.nodeParamConnected",
  nodeParamDisconnected: "WebAudio.nodeParamDisconnected"
}

export const WebAuthn: Protocol.WebAuthnDomain = {
  enable: "WebAuthn.enable",
  disable: "WebAuthn.disable",
  addVirtualAuthenticator: "WebAuthn.addVirtualAuthenticator",
  removeVirtualAuthenticator: "WebAuthn.removeVirtualAuthenticator",
  addCredential: "WebAuthn.addCredential",
  getCredential: "WebAuthn.getCredential",
  getCredentials: "WebAuthn.getCredentials",
  removeCredential: "WebAuthn.removeCredential",
  clearCredentials: "WebAuthn.clearCredentials",
  setUserVerified: "WebAuthn.setUserVerified",
  setAutomaticPresenceSimulation: "WebAuthn.setAutomaticPresenceSimulation"
}

export const Media: Protocol.MediaDomain = {
  enable: "Media.enable",
  disable: "Media.disable",
  playerPropertiesChanged: "Media.playerPropertiesChanged",
  playerEventsAdded: "Media.playerEventsAdded",
  playerMessagesLogged: "Media.playerMessagesLogged",
  playerErrorsRaised: "Media.playerErrorsRaised",
  playersCreated: "Media.playersCreated"
}

export const Console: Protocol.ConsoleDomain = {
  clearMessages: "Console.clearMessages",
  disable: "Console.disable",
  enable: "Console.enable",
  messageAdded: "Console.messageAdded"
}

export const Debugger: Protocol.DebuggerDomain = {
  continueToLocation: "Debugger.continueToLocation",
  disable: "Debugger.disable",
  enable: "Debugger.enable",
  evaluateOnCallFrame: "Debugger.evaluateOnCallFrame",
  getPossibleBreakpoints: "Debugger.getPossibleBreakpoints",
  getScriptSource: "Debugger.getScriptSource",
  getWasmBytecode: "Debugger.getWasmBytecode",
  getStackTrace: "Debugger.getStackTrace",
  pause: "Debugger.pause",
  pauseOnAsyncCall: "Debugger.pauseOnAsyncCall",
  removeBreakpoint: "Debugger.removeBreakpoint",
  restartFrame: "Debugger.restartFrame",
  resume: "Debugger.resume",
  searchInContent: "Debugger.searchInContent",
  setAsyncCallStackDepth: "Debugger.setAsyncCallStackDepth",
  setBlackboxPatterns: "Debugger.setBlackboxPatterns",
  setBlackboxedRanges: "Debugger.setBlackboxedRanges",
  setBreakpoint: "Debugger.setBreakpoint",
  setInstrumentationBreakpoint: "Debugger.setInstrumentationBreakpoint",
  setBreakpointByUrl: "Debugger.setBreakpointByUrl",
  setBreakpointOnFunctionCall: "Debugger.setBreakpointOnFunctionCall",
  setBreakpointsActive: "Debugger.setBreakpointsActive",
  setPauseOnExceptions: "Debugger.setPauseOnExceptions",
  setReturnValue: "Debugger.setReturnValue",
  setScriptSource: "Debugger.setScriptSource",
  setSkipAllPauses: "Debugger.setSkipAllPauses",
  setVariableValue: "Debugger.setVariableValue",
  stepInto: "Debugger.stepInto",
  stepOut: "Debugger.stepOut",
  stepOver: "Debugger.stepOver",
  breakpointResolved: "Debugger.breakpointResolved",
  paused: "Debugger.paused",
  resumed: "Debugger.resumed",
  scriptFailedToParse: "Debugger.scriptFailedToParse",
  scriptParsed: "Debugger.scriptParsed"
}

export const HeapProfiler: Protocol.HeapProfilerDomain = {
  addInspectedHeapObject: "HeapProfiler.addInspectedHeapObject",
  collectGarbage: "HeapProfiler.collectGarbage",
  disable: "HeapProfiler.disable",
  enable: "HeapProfiler.enable",
  getHeapObjectId: "HeapProfiler.getHeapObjectId",
  getObjectByHeapObjectId: "HeapProfiler.getObjectByHeapObjectId",
  getSamplingProfile: "HeapProfiler.getSamplingProfile",
  startSampling: "HeapProfiler.startSampling",
  startTrackingHeapObjects: "HeapProfiler.startTrackingHeapObjects",
  stopSampling: "HeapProfiler.stopSampling",
  stopTrackingHeapObjects: "HeapProfiler.stopTrackingHeapObjects",
  takeHeapSnapshot: "HeapProfiler.takeHeapSnapshot",
  addHeapSnapshotChunk: "HeapProfiler.addHeapSnapshotChunk",
  heapStatsUpdate: "HeapProfiler.heapStatsUpdate",
  lastSeenObjectId: "HeapProfiler.lastSeenObjectId",
  reportHeapSnapshotProgress: "HeapProfiler.reportHeapSnapshotProgress",
  resetProfiles: "HeapProfiler.resetProfiles"
}

export const Profiler: Protocol.ProfilerDomain = {
  disable: "Profiler.disable",
  enable: "Profiler.enable",
  getBestEffortCoverage: "Profiler.getBestEffortCoverage",
  setSamplingInterval: "Profiler.setSamplingInterval",
  start: "Profiler.start",
  startPreciseCoverage: "Profiler.startPreciseCoverage",
  startTypeProfile: "Profiler.startTypeProfile",
  stop: "Profiler.stop",
  stopPreciseCoverage: "Profiler.stopPreciseCoverage",
  stopTypeProfile: "Profiler.stopTypeProfile",
  takePreciseCoverage: "Profiler.takePreciseCoverage",
  takeTypeProfile: "Profiler.takeTypeProfile",
  consoleProfileFinished: "Profiler.consoleProfileFinished",
  consoleProfileStarted: "Profiler.consoleProfileStarted",
  preciseCoverageDeltaUpdate: "Profiler.preciseCoverageDeltaUpdate"
}

export const Runtime: Protocol.RuntimeDomain = {
  awaitPromise: "Runtime.awaitPromise",
  callFunctionOn: "Runtime.callFunctionOn",
  compileScript: "Runtime.compileScript",
  disable: "Runtime.disable",
  discardConsoleEntries: "Runtime.discardConsoleEntries",
  enable: "Runtime.enable",
  evaluate: "Runtime.evaluate",
  getIsolateId: "Runtime.getIsolateId",
  getHeapUsage: "Runtime.getHeapUsage",
  getProperties: "Runtime.getProperties",
  globalLexicalScopeNames: "Runtime.globalLexicalScopeNames",
  queryObjects: "Runtime.queryObjects",
  releaseObject: "Runtime.releaseObject",
  releaseObjectGroup: "Runtime.releaseObjectGroup",
  runIfWaitingForDebugger: "Runtime.runIfWaitingForDebugger",
  runScript: "Runtime.runScript",
  setAsyncCallStackDepth: "Runtime.setAsyncCallStackDepth",
  setCustomObjectFormatterEnabled: "Runtime.setCustomObjectFormatterEnabled",
  setMaxCallStackSizeToCapture: "Runtime.setMaxCallStackSizeToCapture",
  terminateExecution: "Runtime.terminateExecution",
  addBinding: "Runtime.addBinding",
  removeBinding: "Runtime.removeBinding",
  bindingCalled: "Runtime.bindingCalled",
  consoleAPICalled: "Runtime.consoleAPICalled",
  exceptionRevoked: "Runtime.exceptionRevoked",
  exceptionThrown: "Runtime.exceptionThrown",
  executionContextCreated: "Runtime.executionContextCreated",
  executionContextDestroyed: "Runtime.executionContextDestroyed",
  executionContextsCleared: "Runtime.executionContextsCleared",
  inspectRequested: "Runtime.inspectRequested"
}

export const Schema: Protocol.SchemaDomain = {
  getDomains: "Schema.getDomains"
}
