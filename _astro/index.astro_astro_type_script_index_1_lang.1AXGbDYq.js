/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ph=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Cm=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},mh={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,m=u&63;c||(m=64,o||(d=64)),r.push(t[l],t[h],t[d],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ph(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Cm(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw Error();const d=i<<2|a>>4;if(r.push(d),u!==64){const m=a<<4&240|u>>2;if(r.push(m),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},Dm=function(n){const e=ph(n);return mh.encodeByteArray(e,!0)},pi=function(n){return Dm(n).replace(/\./g,"")},Rm=function(n){try{return mh.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function mi(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Pm(t)||(n[t]=mi(n[t],e[t]));return n}function Pm(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[pi(JSON.stringify(t)),pi(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gh(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test($())}function xa(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Lm(){return typeof self=="object"&&self.self===self}function Oa(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function $i(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Mm(){return $().indexOf("Electron/")>=0}function La(){const n=$();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Fm(){return $().indexOf("MSAppHost/")>=0}function Um(){return!xa()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kr(){return typeof indexedDB=="object"}function Vm(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm="FirebaseError";class Ue extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=qm,Object.setPrototypeOf(this,Ue.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,wn.prototype.create)}}class wn{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?Bm(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Ue(s,a,r)}}function Bm(n,e){return n.replace($m,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const $m=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function jm(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Jo(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(Eu(i)&&Eu(o)){if(!Jo(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Eu(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function qn(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function xr(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function yh(n,e){const t=new Gm(n,e);return t.subscribe.bind(t)}class Gm{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Km(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ro),s.error===void 0&&(s.error=Ro),s.complete===void 0&&(s.complete=Ro);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Km(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ro(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S(n){return n&&n._delegate?n._delegate:n}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Or(n,e){return new Promise((t,r)=>{n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var i;r(`${e}: ${(i=s.target.error)===null||i===void 0?void 0:i.message}`)}})}class bu{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,t){return new vh(this._db.transaction.call(this._db,e,t))}createObjectStore(e,t){return new wh(this._db.createObjectStore(e,t))}close(){this._db.close()}}class vh{constructor(e){this._transaction=e,this.complete=new Promise((t,r)=>{this._transaction.oncomplete=function(){t()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new wh(this._transaction.objectStore(e))}}class wh{constructor(e){this._store=e}index(e){return new Tu(this._store.index(e))}createIndex(e,t,r){return new Tu(this._store.createIndex(e,t,r))}get(e){const t=this._store.get(e);return Or(t,"Error reading from IndexedDB")}put(e,t){const r=this._store.put(e,t);return Or(r,"Error writing to IndexedDB")}delete(e){const t=this._store.delete(e);return Or(t,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return Or(e,"Error clearing IndexedDB object store")}}class Tu{constructor(e){this._index=e}get(e){const t=this._index.get(e);return Or(t,"Error reading from IndexedDB")}}function Wm(n,e,t){return new Promise((r,s)=>{try{const i=indexedDB.open(n,e);i.onsuccess=o=>{r(new bu(o.target.result))},i.onerror=o=>{var a;s(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},i.onupgradeneeded=o=>{t(new bu(i.result),o.oldVersion,o.newVersion,new vh(i.transaction))}}catch(i){s(`Error opening indexedDB: ${i.message}`)}})}class rt{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new xm;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e?.identifier),s=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ym(e))try{this.getOrInitializeService({instanceIdentifier:Kt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Kt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Kt){return this.instances.has(e)}getOptions(e=Kt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Hm(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Kt){return this.component?this.component.multipleInstances?e:Kt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Hm(n){return n===Kt?void 0:n}function Ym(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jm{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new zm(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=[];var L;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(L||(L={}));const Ih={debug:L.DEBUG,verbose:L.VERBOSE,info:L.INFO,warn:L.WARN,error:L.ERROR,silent:L.SILENT},Qm=L.INFO,Xm={[L.DEBUG]:"log",[L.VERBOSE]:"log",[L.INFO]:"info",[L.WARN]:"warn",[L.ERROR]:"error"},Zm=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=Xm[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ji{constructor(e){this.name=e,this._logLevel=Qm,this._logHandler=Zm,this._userLogHandler=null,Ma.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in L))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ih[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,L.DEBUG,...e),this._logHandler(this,L.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,L.VERBOSE,...e),this._logHandler(this,L.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,L.INFO,...e),this._logHandler(this,L.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,L.WARN,...e),this._logHandler(this,L.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,L.ERROR,...e),this._logHandler(this,L.ERROR,...e)}}function eg(n){Ma.forEach(e=>{e.setLogLevel(n)})}function tg(n,e){for(const t of Ma){let r=null;e&&e.level&&(r=Ih[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&n({level:L[i].toLowerCase(),message:a,args:o,type:s.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(rg(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function rg(n){const e=n.getComponent();return e?.type==="VERSION"}const Qo="@firebase/app",Su="0.7.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa=new ji("@firebase/app"),sg="@firebase/app-compat",ig="@firebase/analytics-compat",og="@firebase/analytics",ag="@firebase/app-check-compat",cg="@firebase/app-check",ug="@firebase/auth",lg="@firebase/auth-compat",hg="@firebase/database",dg="@firebase/database-compat",fg="@firebase/functions",pg="@firebase/functions-compat",mg="@firebase/installations",gg="@firebase/installations-compat",yg="@firebase/messaging",vg="@firebase/messaging-compat",wg="@firebase/performance",Ig="@firebase/performance-compat",_g="@firebase/remote-config",Eg="@firebase/remote-config-compat",bg="@firebase/storage",Tg="@firebase/storage-compat",Sg="@firebase/firestore",Ag="@firebase/firestore-compat",kg="firebase",Ng="9.6.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn="[DEFAULT]",Cg={[Qo]:"fire-core",[sg]:"fire-core-compat",[og]:"fire-analytics",[ig]:"fire-analytics-compat",[cg]:"fire-app-check",[ag]:"fire-app-check-compat",[ug]:"fire-auth",[lg]:"fire-auth-compat",[hg]:"fire-rtdb",[dg]:"fire-rtdb-compat",[fg]:"fire-fn",[pg]:"fire-fn-compat",[mg]:"fire-iid",[gg]:"fire-iid-compat",[yg]:"fire-fcm",[vg]:"fire-fcm-compat",[wg]:"fire-perf",[Ig]:"fire-perf-compat",[_g]:"fire-rc",[Eg]:"fire-rc-compat",[bg]:"fire-gcs",[Tg]:"fire-gcs-compat",[Sg]:"fire-fst",[Ag]:"fire-fst-compat","fire-js":"fire-js",[kg]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=new Map,Wr=new Map;function gi(n,e){try{n.container.addComponent(e)}catch(t){Fa.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function _h(n,e){n.container.addOrOverwriteComponent(e)}function Ct(n){const e=n.name;if(Wr.has(e))return Fa.debug(`There were multiple attempts to register component ${e}.`),!1;Wr.set(e,n);for(const t of Nt.values())gi(t,n);return!0}function Eh(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Dg(n,e,t=nn){Eh(n,e).clearInstance(t)}function Rg(){Wr.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pg={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},Dt=new wn("app","Firebase",Pg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xg=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new rt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Dt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const In=Ng;function bh(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:nn,automaticDataCollectionEnabled:!1},e),r=t.name;if(typeof r!="string"||!r)throw Dt.create("bad-app-name",{appName:String(r)});const s=Nt.get(r);if(s){if(Jo(n,s.options)&&Jo(t,s.config))return s;throw Dt.create("duplicate-app",{appName:r})}const i=new Jm(r);for(const a of Wr.values())i.addComponent(a);const o=new xg(n,t,i);return Nt.set(r,o),o}function Og(n=nn){const e=Nt.get(n);if(!e)throw Dt.create("no-app",{appName:n});return e}function Lg(){return Array.from(Nt.values())}async function Th(n){const e=n.name;Nt.has(e)&&(Nt.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function et(n,e,t){var r;let s=(r=Cg[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Fa.warn(a.join(" "));return}Ct(new rt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Sh(n,e){if(n!==null&&typeof n!="function")throw Dt.create("invalid-log-argument");tg(n,e)}function Ah(n){eg(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg="firebase-heartbeat-database",Fg=1,zr="firebase-heartbeat-store";let Po=null;function kh(){return Po||(Po=Wm(Mg,Fg,(n,e)=>{switch(e){case 0:n.createObjectStore(zr)}}).catch(n=>{throw Dt.create("storage-open",{originalErrorMessage:n.message})})),Po}async function Ug(n){try{return(await kh()).transaction(zr).objectStore(zr).get(Nh(n))}catch(e){throw Dt.create("storage-get",{originalErrorMessage:e.message})}}async function Au(n,e){try{const r=(await kh()).transaction(zr,"readwrite");return await r.objectStore(zr).put(e,Nh(n)),r.complete}catch(t){throw Dt.create("storage-set",{originalErrorMessage:t.message})}}function Nh(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg=1024,qg=30*24*60*60*1e3;class Bg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new jg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ku();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=qg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ku(),{heartbeatsToSend:t,unsentEntries:r}=$g(this._heartbeatsCache.heartbeats),s=pi(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ku(){return new Date().toISOString().substring(0,10)}function $g(n,e=Vg){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Nu(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Nu(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class jg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kr()?Vm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ug(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Au(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Au(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nu(n){return pi(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n){Ct(new rt("platform-logger",e=>new ng(e),"PRIVATE")),Ct(new rt("heartbeat",e=>new Bg(e),"PRIVATE")),et(Qo,Su,n),et(Qo,Su,"esm2017"),et("fire-js","")}Gg("");const Kg=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Ue,SDK_VERSION:In,_DEFAULT_ENTRY_NAME:nn,_addComponent:gi,_addOrOverwriteComponent:_h,_apps:Nt,_clearComponents:Rg,_components:Wr,_getProvider:Eh,_registerComponent:Ct,_removeServiceInstance:Dg,deleteApp:Th,getApp:Og,getApps:Lg,initializeApp:bh,onLog:Sh,registerVersion:et,setLogLevel:Ah},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,t){this._delegate=e,this.firebase=t,gi(e,new rt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Th(this._delegate)))}_getService(e,t=nn){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=nn){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){gi(this._delegate,e)}_addOrOverwriteComponent(e){_h(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},Cu=new wn("app-compat","Firebase",zg);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hg(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:et,setLogLevel:Ah,onLog:Sh,apps:null,SDK_VERSION:In,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:Kg}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||nn,!_u(e,u))throw Cu.create("no-app",{appName:u});return e[u]}s.App=n;function i(u,l={}){const h=bh(u,l);if(_u(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Ct(u)&&u.type==="PUBLIC"){const d=(m=s())=>{if(typeof m[h]!="function")throw Cu.create("invalid-app-argument",{appName:l});return m[h]()};u.serviceProps!==void 0&&mi(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...m){return this._getService.bind(this,l).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(){const n=Hg(Wg);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Ch,extendNamespace:e,createSubscribe:yh,ErrorFactory:wn,deepExtend:mi});function e(t){mi(n,t)}return n}const Yg=Ch();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du=new ji("@firebase/app-compat"),Jg="@firebase/app-compat",Qg="0.1.21";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){et(Jg,Qg,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(Lm()&&self.firebase!==void 0){Du.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Du.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const rn=Yg;Xg();var Zg="firebase",ey="9.6.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rn.registerVersion(Zg,ey,"app-compat");function Ua(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}const Sr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},xn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function Dh(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ny=ty,ry=Dh,Rh=new wn("auth","Firebase",Dh());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ru=new ji("@firebase/auth");function ni(n,...e){Ru.logLevel<=L.ERROR&&Ru.error(`Auth (${In}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(n,...e){throw Va(n,...e)}function we(n,...e){return Va(n,...e)}function Ph(n,e,t){const r=Object.assign(Object.assign({},ry()),{[e]:t});return new wn("auth","Firebase",r).create(e,{appName:n.name})}function dr(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ee(n,"argument-error"),Ph(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Va(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Rh.create(n,...e)}function w(n,e,...t){if(!n)throw Va(e,...t)}function Ze(n){const e="INTERNAL ASSERTION FAILED: "+n;throw ni(e),new Error(e)}function He(n,e){n||Ze(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pu=new Map;function Me(n){He(n instanceof Function,"Expected a class definition");let e=Pu.get(n);return e?(He(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Pu.set(n,e),e)}function sy(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(Me);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function qa(){return xu()==="http:"||xu()==="https:"}function xu(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iy(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qa()||Oa()||"connection"in navigator)?navigator.onLine:!0}function oy(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.shortDelay=e,this.longDelay=t,He(t>e,"Short delay should be less than long delay!"),this.isMobile=gh()||$i()}get(){return iy()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(n,e){He(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ze("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ze("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ze("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ay={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy=new ws(3e4,6e4);function ie(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function fe(n,e,t,r,s={}){return Oh(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=hr(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),xh.fetch()(Lh(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Oh(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},ay),e);try{const s=new uy(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ri(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ri(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ri(n,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ph(n,l,u);Ee(n,l)}}catch(s){if(s instanceof Ue)throw s;Ee(n,"network-request-failed")}}async function gt(n,e,t,r,s={}){const i=await fe(n,e,t,r,s);return"mfaPendingCredential"in i&&Ee(n,"multi-factor-auth-required",{_serverResponse:i}),i}function Lh(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?Ba(n.config,s):`${n.config.apiScheme}://${s}`}class uy{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(we(this.auth,"network-request-failed")),cy.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ri(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=we(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ly(n,e){return fe(n,"POST","/v1/accounts:delete",e)}async function hy(n,e){return fe(n,"POST","/v1/accounts:update",e)}async function dy(n,e){return fe(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function fy(n,e=!1){const t=S(n),r=await t.getIdToken(e),s=Gi(r);w(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i?.sign_in_provider;return{claims:s,token:r,authTime:Fr(xo(s.auth_time)),issuedAtTime:Fr(xo(s.iat)),expirationTime:Fr(xo(s.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function xo(n){return Number(n)*1e3}function Gi(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return ni("JWT malformed, contained fewer than 3 sections"),null;try{const s=Rm(t);return s?JSON.parse(s):(ni("Failed to decode base64 JWT payload"),null)}catch(s){return ni("Caught error parsing JWT payload as JSON",s),null}}function py(n){const e=Gi(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ht(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Ue&&my(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function my({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fr(this.lastLoginAt),this.creationTime=Fr(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ht(n,dy(t,{idToken:r}));w(s?.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?wy(i.providerUserInfo):[],a=vy(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!a?.length,l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Mh(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function yy(n){const e=S(n);await Yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vy(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function wy(n){return n.map(e=>{var{providerId:t}=e,r=Ua(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Iy(n,e){const t=await Oh(n,{},async()=>{const r=hr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=Lh(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",xh.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):py(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return w(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Iy(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new Jr;return r&&(w(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(w(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(w(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Jr,this.toJSON())}_performRefresh(){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Zt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Ua(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new gy(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Mh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ht(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return fy(this,e)}reload(){return yy(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Zt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Yr(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ht(this,ly(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,m=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,T=(a=t.tenantId)!==null&&a!==void 0?a:void 0,C=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,U=(u=t.createdAt)!==null&&u!==void 0?u:void 0,D=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:ne,emailVerified:G,isAnonymous:H,providerData:O,stsTokenManager:Ge}=t;w(ne&&Ge,e,"internal-error");const ke=Jr.fromJSON(this.name,Ge);w(typeof ne=="string",e,"internal-error"),It(h,e.name),It(d,e.name),w(typeof G=="boolean",e,"internal-error"),w(typeof H=="boolean",e,"internal-error"),It(m,e.name),It(g,e.name),It(T,e.name),It(C,e.name),It(U,e.name),It(D,e.name);const Ke=new Zt({uid:ne,auth:e,email:d,emailVerified:G,displayName:h,isAnonymous:H,photoURL:g,phoneNumber:m,tenantId:T,stsTokenManager:ke,createdAt:U,lastLoginAt:D});return O&&Array.isArray(O)&&(Ke.providerData=O.map(Y=>Object.assign({},Y))),C&&(Ke._redirectEventId=C),Ke}static async _fromIdTokenResponse(e,t,r=!1){const s=new Jr;s.updateFromServerResponse(t);const i=new Zt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Yr(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Fh.type="NONE";const Jn=Fh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(n,e,t){return`firebase:${n}:${e}:${t}`}class Gn{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=en(this.userKey,s.apiKey,i),this.fullPersistenceKey=en("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Zt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Gn(Me(Jn),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Me(Jn);const o=en(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=Zt._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new Gn(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Gn(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Bh(e))return"Blackberry";if($h(e))return"Webos";if($a(e))return"Safari";if((e.includes("chrome/")||Vh(e))&&!e.includes("edge/"))return"Chrome";if(Is(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function Uh(n=$()){return/firefox\//i.test(n)}function $a(n=$()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vh(n=$()){return/crios\//i.test(n)}function qh(n=$()){return/iemobile/i.test(n)}function Is(n=$()){return/android/i.test(n)}function Bh(n=$()){return/blackberry/i.test(n)}function $h(n=$()){return/webos/i.test(n)}function fr(n=$()){return/iphone|ipad|ipod/i.test(n)}function _y(n=$()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Ey(n=$()){var e;return fr(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function by(){return La()&&document.documentMode===10}function jh(n=$()){return fr(n)||Is(n)||$h(n)||Bh(n)||/windows phone/i.test(n)||qh(n)}function Ty(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gh(n,e=[]){let t;switch(n){case"Browser":t=Ou($());break;case"Worker":t=`${Ou($())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${In}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Lu(this),this.idTokenSubscription=new Lu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rh,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Me(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await Gn.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var t;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,i=r?._redirectEventId,o=await this.tryRedirectSignIn(e);(!s||s===i)&&o?.user&&(r=o.user)}return r?r._redirectEventId?(w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yr(e)}catch(t){if(t.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=oy()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?S(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Me(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new wn("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Me(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await Gn.create(this,[Me(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return w(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function he(n){return S(n)}class Lu{constructor(e){this.auth=e,this.observer=null,this.addObserver=yh(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Ay(n,e,t){const r=he(n);w(r._canInitEmulator,r,"emulator-config-failed"),w(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!t?.disableWarnings,i=Kh(e),{host:o,port:a}=ky(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Ny()}function Kh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ky(n){const e=Kh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Mu(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Mu(o)}}}function Mu(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Ny(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ze("not implemented")}_getIdTokenResponse(e){return Ze("not implemented")}_linkToIdToken(e,t){return Ze("not implemented")}_getReauthenticationResolver(e){return Ze("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(n,e){return fe(n,"POST","/v1/accounts:resetPassword",ie(n,e))}async function zh(n,e){return fe(n,"POST","/v1/accounts:update",e)}async function Cy(n,e){return fe(n,"POST","/v1/accounts:update",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dy(n,e){return gt(n,"POST","/v1/accounts:signInWithPassword",ie(n,e))}async function Ki(n,e){return fe(n,"POST","/v1/accounts:sendOobCode",ie(n,e))}async function Ry(n,e){return Ki(n,e)}async function Py(n,e){return Ki(n,e)}async function xy(n,e){return Ki(n,e)}async function Oy(n,e){return Ki(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ly(n,e){return gt(n,"POST","/v1/accounts:signInWithEmailLink",ie(n,e))}async function My(n,e){return gt(n,"POST","/v1/accounts:signInWithEmailLink",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends pr{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Qr(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Qr(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Dy(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ly(e,{email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return zh(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return My(e,{idToken:t,email:this._email,oobCode:this._password});default:Ee(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lt(n,e){return gt(n,"POST","/v1/accounts:signInWithIdp",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fy="http://localhost";class st extends pr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new st(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ee("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Ua(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new st(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,lt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}buildRequest(){const e={requestUri:Fy,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=hr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uy(n,e){return fe(n,"POST","/v1/accounts:sendVerificationCode",ie(n,e))}async function Vy(n,e){return gt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,e))}async function qy(n,e){const t=await gt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,e));if(t.temporaryProof)throw ri(n,"account-exists-with-different-credential",t);return t}const By={USER_NOT_FOUND:"user-not-found"};async function $y(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return gt(n,"POST","/v1/accounts:signInWithPhoneNumber",ie(n,t),By)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends pr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new tn({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new tn({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Vy(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qy(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return $y(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new tn({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jy(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Gy(n){const e=qn(xr(n)).link,t=e?qn(xr(e)).deep_link_id:null,r=qn(xr(n)).deep_link_id;return(r?qn(xr(r)).link:null)||r||t||e||n}class Wi{constructor(e){var t,r,s,i,o,a;const c=qn(xr(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=jy((s=c.mode)!==null&&s!==void 0?s:null);w(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Gy(e);try{return new Wi(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(){this.providerId=Ut.PROVIDER_ID}static credential(e,t){return Qr._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Wi.parseLink(t);return w(r,"argument-error"),Qr._fromEmailAndCode(e,r.code,r.tenantId)}}Ut.PROVIDER_ID="password";Ut.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ut.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends yt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Kn extends mr{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return w("providerId"in t&&"signInMethod"in t,"argument-error"),st._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return w(e.idToken||e.accessToken,"argument-error"),st._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Kn.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Kn.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!t&&!i||!a)return null;try{return new Kn(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye extends mr{constructor(){super("facebook.com")}static credential(e){return st._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch{return null}}}Ye.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ye.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je extends mr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return st._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Je.credential(t,r)}catch{return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com";Je.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends mr{constructor(){super("github.com")}static credential(e){return st._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch{return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com";Qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ky="http://localhost";class Qn extends pr{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return lt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,lt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,lt(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=t;return!r||!s||!i||r!==s?null:new Qn(r,i)}static _create(e,t){return new Qn(e,t)}buildRequest(){return{requestUri:Ky,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="saml.";class yi extends yt{constructor(e){w(e.startsWith(Wy),"argument-error"),super(e)}static credentialFromResult(e){return yi.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return yi.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Qn.fromJSON(e);return w(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Qn._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends mr{constructor(){super("twitter.com")}static credential(e,t){return st._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Xe.credential(t,r)}catch{return null}}}Xe.TWITTER_SIGN_IN_METHOD="twitter.com";Xe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hh(n,e){return gt(n,"POST","/v1/accounts:signUp",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Zt._fromIdTokenResponse(e,r,s),o=Fu(r);return new $e({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Fu(r);return new $e({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Fu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zy(n){var e;const t=he(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new $e({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await Hh(t,{returnSecureToken:!0}),s=await $e._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi extends Ue{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,vi.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new vi(e,t,r,s)}}function Yh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?vi._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jh(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hy(n,e){const t=S(n);await zi(!0,t,e);const{providerUserInfo:r}=await hy(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=Jh(r||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function ja(n,e,t=!1){const r=await ht(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return $e._forOperation(n,"link",r)}async function zi(n,e,t){await Yr(e);const r=Jh(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";w(r.has(t)===n,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qh(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await ht(n,Yh(r,s,e,n),t);w(i.idToken,r,"internal-error");const o=Gi(i.idToken);w(o,r,"internal-error");const{sub:a}=o;return w(n.uid===a,r,"user-mismatch"),$e._forOperation(n,s,i)}catch(i){throw i?.code==="auth/user-not-found"&&Ee(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(n,e,t=!1){const r="signIn",s=await Yh(n,r,e),i=await $e._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function Hi(n,e){return Xh(he(n),e)}async function Zh(n,e){const t=S(n);return await zi(!1,t,e.providerId),ja(t,e)}async function ed(n,e){return Qh(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yy(n,e){return gt(n,"POST","/v1/accounts:signInWithCustomToken",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jy(n,e){const t=he(n),r=await Yy(t,{token:e,returnSecureToken:!0}),s=await $e._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ga._fromServerResponse(e,t):Ee(e,"internal-error")}}class Ga extends Yi{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ga(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(n,e,t){var r;w(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),w(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(w(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(w(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qy(n,e,t){const r=S(n),s={requestType:"PASSWORD_RESET",email:e};t&&Ji(r,s,t),await Py(r,s)}async function Xy(n,e,t){await Wh(S(n),{oobCode:e,newPassword:t})}async function Zy(n,e){await Cy(S(n),{oobCode:e})}async function td(n,e){const t=S(n),r=await Wh(t,{oobCode:e}),s=r.requestType;switch(w(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":w(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":w(r.mfaInfo,t,"internal-error");default:w(r.email,t,"internal-error")}let i=null;return r.mfaInfo&&(i=Yi._fromServerResponse(he(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function ev(n,e){const{data:t}=await td(S(n),e);return t.email}async function tv(n,e,t){const r=he(n),s=await Hh(r,{returnSecureToken:!0,email:e,password:t}),i=await $e._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function nv(n,e,t){return Hi(S(n),Ut.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rv(n,e,t){const r=S(n),s={requestType:"EMAIL_SIGNIN",email:e};w(t.handleCodeInApp,r,"argument-error"),t&&Ji(r,s,t),await xy(r,s)}function sv(n,e){const t=Wi.parseLink(e);return t?.operation==="EMAIL_SIGNIN"}async function iv(n,e,t){const r=S(n),s=Ut.credentialWithLink(e,t||Hr());return w(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Hi(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(n,e){return fe(n,"POST","/v1/accounts:createAuthUri",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function av(n,e){const t=qa()?Hr():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await ov(S(n),r);return s||[]}async function cv(n,e){const t=S(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&Ji(t.auth,s,e);const{email:i}=await Ry(t.auth,s);i!==n.email&&await n.reload()}async function uv(n,e,t){const r=S(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&Ji(r.auth,i,t);const{email:o}=await Oy(r.auth,i);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(n,e){return fe(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hv(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=S(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await ht(r,lv(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function dv(n,e){return nd(S(n),e,null)}function fv(n,e){return nd(S(n),null,e)}async function nd(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await ht(n,zh(r,i));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pv(n){var e,t;if(!n)return null;const{providerId:r}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&n?.idToken){const o=(t=(e=Gi(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Wn(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new mv(i,s);case"github.com":return new gv(i,s);case"google.com":return new yv(i,s);case"twitter.com":return new vv(i,s,n.screenName||null);case"custom":case"anonymous":return new Wn(i,null);default:return new Wn(i,r,s)}}class Wn{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class rd extends Wn{constructor(e,t,r,s){super(e,t,r),this.username=s}}class mv extends Wn{constructor(e,t){super(e,"facebook.com",t)}}class gv extends rd{constructor(e,t){super(e,"github.com",t,typeof t?.login=="string"?t?.login:null)}}class yv extends Wn{constructor(e,t){super(e,"google.com",t)}}class vv extends rd{constructor(e,t,r){super(e,"twitter.com",t,r)}}function wv(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:pv(t)}class Ht{constructor(e,t){this.type=e,this.credential=t}static _fromIdtoken(e){return new Ht("enroll",e)}static _fromMfaPendingCredential(e){return new Ht("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e?.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Ht._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return Ht._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=he(e),s=t.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>Yi._fromServerResponse(r,a));w(s.mfaPendingCredential,r,"internal-error");const o=Ht._fromMfaPendingCredential(s.mfaPendingCredential);return new Ka(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const u=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await $e._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return w(t.user,r,"internal-error"),$e._forOperation(t.user,t.operationType,u);default:Ee(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function Iv(n,e){var t;const r=S(n),s=e;return w(e.customData.operationType,r,"argument-error"),w((t=s.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),Ka._fromError(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _v(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:start",ie(n,e))}function Ev(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:finalize",ie(n,e))}function bv(n,e){return fe(n,"POST","/v2/accounts/mfaEnrollment:withdraw",ie(n,e))}class Wa{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Yi._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Wa(e)}async getSession(){return Ht._fromIdtoken(await this.user.getIdToken())}async enroll(e,t){const r=e,s=await this.getSession(),i=await ht(this.user,r._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),s=await ht(this.user,bv(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(s);try{await this.user.reload()}catch(i){if(i.code!=="auth/user-token-expired")throw i}}}const Oo=new WeakMap;function Tv(n){const e=S(n);return Oo.has(e)||Oo.set(e,Wa._fromUser(e)),Oo.get(e)}const wi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wi,"1"),this.storage.removeItem(wi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(){const n=$();return $a(n)||fr(n)}const Av=1e3,kv=10;class id extends sd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Sv()&&Ty(),this.fallbackToPolling=jh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);by()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kv):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Av)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}id.type="LOCAL";const za=id;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od extends sd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}od.type="SESSION";const sn=od;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Qi(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await Nv(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Qi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _s(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=_s("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function re(){return window}function Dv(n){re().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(){return typeof re().WorkerGlobalScope<"u"&&typeof re().importScripts=="function"}async function Rv(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Pv(){var n;return((n=navigator?.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function xv(){return Ha()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ad="firebaseLocalStorageDb",Ov=1,Ii="firebaseLocalStorage",cd="fbase_key";class Es{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Xi(n,e){return n.transaction([Ii],e?"readwrite":"readonly").objectStore(Ii)}function Lv(){const n=indexedDB.deleteDatabase(ad);return new Es(n).toPromise()}function Xo(){const n=indexedDB.open(ad,Ov);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ii,{keyPath:cd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ii)?e(r):(r.close(),await Lv(),e(await Xo()))})})}async function Uu(n,e,t){const r=Xi(n,!0).put({[cd]:e,value:t});return new Es(r).toPromise()}async function Mv(n,e){const t=Xi(n,!1).get(e),r=await new Es(t).toPromise();return r===void 0?null:r.value}function Vu(n,e){const t=Xi(n,!0).delete(e);return new Es(t).toPromise()}const Fv=800,Uv=3;class ud{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Xo(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Uv)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ha()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Qi._getInstance(xv()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Rv(),!this.activeServiceWorker)return;this.sender=new Cv(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Pv()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Xo();return await Uu(e,wi,"1"),await Vu(e,wi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Uu(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Mv(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Vu(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Xi(s,!1).getAll();return new Es(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ud.type="LOCAL";const Xr=ud;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(n,e){return fe(n,"POST","/v2/accounts/mfaSignIn:start",ie(n,e))}function qv(n,e){return fe(n,"POST","/v2/accounts/mfaSignIn:finalize",ie(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bv(n){return(await fe(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $v(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ld(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=we("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",$v().appendChild(r)})}function hd(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=500,Gv=6e4,js=1e12;class Kv{constructor(e){this.auth=e,this.counter=js,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new Wv(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||js;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||js;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||js;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class Wv{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;w(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=zv(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},Gv)},jv))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function zv(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lo=hd("rcb"),Hv=new ws(3e4,6e4),Yv="https://www.google.com/recaptcha/api.js?";class Jv{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!re().grecaptcha}load(e,t=""){return w(Qv(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(re().grecaptcha):new Promise((r,s)=>{const i=re().setTimeout(()=>{s(we(e,"network-request-failed"))},Hv.get());re()[Lo]=()=>{re().clearTimeout(i),delete re()[Lo];const a=re().grecaptcha;if(!a){s(we(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${Yv}?${hr({onload:Lo,render:"explicit",hl:t})}`;ld(o).catch(()=>{clearTimeout(i),s(we(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!re().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Qv(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class Xv{async load(e){return new Kv(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dd="recaptcha",Zv={theme:"light",type:"image"};let ew=class{constructor(e,t=Object.assign({},Zv),r){this.parameters=t,this.type=dd,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=he(r),this.isInvisible=this.parameters.size==="invisible",w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;w(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Xv:new Jv,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){w(!this.parameters.sitekey,this.auth,"argument-error"),w(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),w(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=re()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){w(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){w(qa()&&!Ha(),this.auth,"internal-error"),await tw(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Bv(this.auth);w(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return w(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function tw(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ya{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=tn._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function nw(n,e,t){const r=he(n),s=await Zi(r,e,S(t));return new Ya(s,i=>Hi(r,i))}async function rw(n,e,t){const r=S(n);await zi(!1,r,"phone");const s=await Zi(r.auth,e,S(t));return new Ya(s,i=>Zh(r,i))}async function sw(n,e,t){const r=S(n),s=await Zi(r.auth,e,S(t));return new Ya(s,i=>ed(r,i))}async function Zi(n,e,t){var r;const s=await t.verify();try{w(typeof s=="string",n,"argument-error"),w(t.type===dd,n,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return w(o.type==="enroll",n,"internal-error"),(await _v(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{w(o.type==="signin",n,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return w(a,n,"missing-multi-factor-info"),(await Vv(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await Uy(n,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{t._reset()}}async function iw(n,e){await ja(S(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let on=class si{constructor(e){this.providerId=si.PROVIDER_ID,this.auth=he(e)}verifyPhoneNumber(e,t){return Zi(this.auth,e,S(t))}static credential(e,t){return tn._fromVerification(e,t)}static credentialFromResult(e){const t=e;return si.credentialFromTaggedObject(t)}static credentialFromError(e){return si.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?tn._fromTokenResponse(t,r):null}};on.PROVIDER_ID="phone";on.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(n,e){return e?Me(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends pr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return lt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return lt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return lt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function ow(n){return Xh(n.auth,new Ja(n),n.bypassAuthState)}function aw(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),Qh(t,new Ja(n),n.bypassAuthState)}async function cw(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),ja(t,new Ja(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ow;case"linkViaPopup":case"linkViaRedirect":return cw;case"reauthViaPopup":case"reauthViaRedirect":return aw;default:Ee(this.auth,"internal-error")}}resolve(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){He(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uw=new ws(2e3,1e4);async function lw(n,e,t){const r=he(n);dr(n,e,yt);const s=_n(r,t);return new at(r,"signInViaPopup",e,s).executeNotNull()}async function hw(n,e,t){const r=S(n);dr(r.auth,e,yt);const s=_n(r.auth,t);return new at(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function dw(n,e,t){const r=S(n);dr(r.auth,e,yt);const s=_n(r.auth,t);return new at(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class at extends fd{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,at.currentPopupAction&&at.currentPopupAction.cancel(),at.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){He(this.filter.length===1,"Popup operations only handle one event");const e=_s();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,at.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,uw.get())};e()}}at.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fw="pendingRedirect",ii=new Map;class pw extends fd{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=ii.get(this.auth._key());if(!e){try{const r=await mw(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}ii.set(this.auth._key(),e)}return this.bypassAuthState||ii.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mw(n,e){const t=md(e),r=pd(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function Qa(n,e){return pd(n)._set(md(e),"true")}function gw(){ii.clear()}function pd(n){return Me(n._redirectPersistence)}function md(n){return en(fw,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yw(n,e,t){return vw(n,e,t)}async function vw(n,e,t){const r=he(n);dr(n,e,yt);const s=_n(r,t);return await Qa(s,r),s._openRedirect(r,e,"signInViaRedirect")}function ww(n,e,t){return Iw(n,e,t)}async function Iw(n,e,t){const r=S(n);dr(r.auth,e,yt);const s=_n(r.auth,t);await Qa(s,r.auth);const i=await gd(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function _w(n,e,t){return Ew(n,e,t)}async function Ew(n,e,t){const r=S(n);dr(r.auth,e,yt);const s=_n(r.auth,t);await zi(!1,r,e.providerId),await Qa(s,r.auth);const i=await gd(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function bw(n,e){return await he(n)._initializationPromise,eo(n,e,!1)}async function eo(n,e,t=!1){const r=he(n),s=_n(r,e),o=await new pw(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function gd(n){const e=_s(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=10*60*1e3;class yd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Sw(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!vd(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(we(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Tw&&this.cachedEventUids.clear(),this.cachedEventUids.has(qu(e))}saveEventToCache(e){this.cachedEventUids.add(qu(e)),this.lastProcessedEventTime=Date.now()}}function qu(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function vd({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Sw(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vd(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(n,e={}){return fe(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Aw=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kw=/^https?/;async function Nw(n){if(n.config.emulator)return;const{authorizedDomains:e}=await wd(n);for(const t of e)try{if(Cw(t))return}catch{}Ee(n,"unauthorized-domain")}function Cw(n){const e=Hr(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!kw.test(t))return!1;if(Aw.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dw=new ws(3e4,6e4);function Bu(){const n=re().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Rw(n){return new Promise((e,t)=>{var r,s,i;function o(){Bu(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bu(),t(we(n,"network-request-failed"))},timeout:Dw.get()})}if(!((s=(r=re().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=re().gapi)===null||i===void 0)&&i.load)o();else{const a=hd("iframefcb");return re()[a]=()=>{gapi.load?o():t(we(n,"network-request-failed"))},ld(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw oi=null,e})}let oi=null;function Pw(n){return oi=oi||Rw(n),oi}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xw=new ws(5e3,15e3),Ow="__/auth/iframe",Lw="emulator/auth/iframe",Mw={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fw=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Uw(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Ba(e,Lw):`https://${n.config.authDomain}/${Ow}`,r={apiKey:e.apiKey,appName:n.name,v:In},s=Fw.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${hr(r).slice(1)}`}async function Vw(n){const e=await Pw(n),t=re().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:Uw(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mw,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=we(n,"network-request-failed"),a=re().setTimeout(()=>{i(o)},xw.get());function c(){re().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Bw=500,$w=600,jw="_blank",Gw="http://localhost";class $u{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kw(n,e,t,r=Bw,s=$w){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},qw),{width:r.toString(),height:s.toString(),top:i,left:o}),u=$().toLowerCase();t&&(a=Vh(u)?jw:t),Uh(u)&&(e=e||Gw,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[m,g])=>`${d}${m}=${g},`,"");if(Ey(u)&&a!=="_self")return Ww(e||"",a),new $u(null);const h=window.open(e||"",a,l);w(h,n,"popup-blocked");try{h.focus()}catch{}return new $u(h)}function Ww(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="__/auth/handler",Hw="emulator/auth/handler";function Zo(n,e,t,r,s,i){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:In,eventId:s};if(e instanceof yt){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",jm(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof mr){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Yw(n)}?${hr(a).slice(1)}`}function Yw({config:n}){return n.emulator?Ba(n,Hw):`https://${n.authDomain}/${zw}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo="webStorageSupport";class Jw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=sn,this._completeRedirectFn=eo}async _openPopup(e,t,r,s){var i;He((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Zo(e,t,r,Hr(),s);return Kw(e,o,_s())}async _openRedirect(e,t,r,s){return await this._originValidation(e),Dv(Zo(e,t,r,Hr(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(He(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Vw(e),r=new yd(e);return t.register("authEvent",s=>(w(s?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Mo,{type:Mo},s=>{var i;const o=(i=s?.[0])===null||i===void 0?void 0:i[Mo];o!==void 0&&t(!!o),Ee(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Nw(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jh()||$a()||fr()}}const Qw=Jw;class Xw{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Ze("unexpected MultiFactorSessionType")}}}class Xa extends Xw{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xa(e)}_finalizeEnroll(e,t,r){return Ev(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return qv(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Id{constructor(){}static assertion(e){return Xa._fromCredential(e)}}Id.FACTOR_ID="phone";var ju="@firebase/auth",Gu="0.19.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var s;e(((s=r)===null||s===void 0?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eI(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tI(n){Ct(new rt("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{w(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),w(!o?.includes(":"),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gh(n)},l=new Sy(a,c,u);return sy(l,t),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ct(new rt("auth-internal",e=>{const t=he(e.getProvider("auth").getImmediate());return(r=>new Zw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),et(ju,Gu,eI(n)),et(ju,Gu,"esm2017")}tI("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nI=2e3;async function rI(n,e,t){var r;const{BuildInfo:s}=an();He(e.sessionId,"AuthEvent did not contain a session ID");const i=await cI(e.sessionId),o={};return fr()?o.ibi=s.packageName:Is()?o.apn=s.packageName:Ee(n,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,Zo(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function sI(n){const{BuildInfo:e}=an(),t={};fr()?t.iosBundleId=e.packageName:Is()?t.androidPackageName=e.packageName:Ee(n,"operation-not-supported-in-this-environment"),await wd(n,t)}function iI(n){const{cordova:e}=an();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(n):s=e.InAppBrowser.open(n,_y()?"_blank":"_system","location=yes"),t(s)})})}async function oI(n,e,t){const{cordova:r}=an();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof t?.close=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(we(n,"redirect-cancelled-by-user"))},nI))}function l(){document?.visibilityState==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Is()&&document.addEventListener("visibilitychange",l,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{s()}}function aI(n){var e,t,r,s,i,o,a,c,u,l;const h=an();w(typeof((e=h?.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),w(typeof((t=h?.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),w(typeof((i=(s=(r=h?.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((c=(a=(o=h?.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),w(typeof((l=(u=h?.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function cI(n){const e=uI(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(s=>s.toString(16).padStart(2,"0")).join("")}function uI(n){if(He(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=20;class hI extends yd{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function dI(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:mI(),postBody:null,tenantId:n.tenantId,error:we(n,"no-auth-event")}}function fI(n,e){return ea()._set(ta(n),e)}async function Ku(n){const e=await ea()._get(ta(n));return e&&await ea()._remove(ta(n)),e}function pI(n,e){var t,r;const s=yI(e);if(s.includes("/__/auth/callback")){const i=ai(s),o=i.firebaseError?gI(decodeURIComponent(i.firebaseError)):null,a=(r=(t=o?.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?we(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:s,postBody:null}}return null}function mI(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<lI;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function ea(){return Me(za)}function ta(n){return en("authEvent",n.config.apiKey,n.name)}function gI(n){try{return JSON.parse(n)}catch{return null}}function yI(n){const e=ai(n),t=e.link?decodeURIComponent(e.link):void 0,r=ai(t).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return ai(s).link||s||r||t||n}function ai(n){if(!n?.includes("?"))return{};const[e,...t]=n.split("?");return qn(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vI=500;class wI{constructor(){this._redirectPersistence=sn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=eo}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new hI(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Ee(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,s){aI(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),gw(),await this._originValidation(e);const o=dI(e,r,s);await fI(e,o);const a=await rI(e,o,t),c=await iI(a);return oI(e,i,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=sI(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=an(),o=setTimeout(async()=>{await Ku(e),t.onEvent(Wu())},vI),a=async l=>{clearTimeout(o);const h=await Ku(e);let d=null;h&&l?.url&&(d=pI(h,l.url)),t.onEvent(d||Wu())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,u=`${i.packageName.toLowerCase()}://`;an().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const II=wI;function Wu(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:we("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _I(n,e){he(n)._logFramework(e)}var EI="@firebase/auth-compat",bI="0.2.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=1e3;function _i(){var n;return((n=self?.location)===null||n===void 0?void 0:n.protocol)||null}function SI(){return _i()==="http:"||_i()==="https:"}function _d(n=$()){return!!((_i()==="file:"||_i()==="ionic:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function AI(){return $i()||xa()}function kI(){return La()&&document?.documentMode===11}function NI(n=$()){return/Edge\/\d+/.test(n)}function CI(n=$()){return kI()||NI(n)}function Ed(){try{const n=self.localStorage,e=_s();if(n)return n.setItem(e,"1"),n.removeItem(e),CI()?Kr():!0}catch{return Za()&&Kr()}return!1}function Za(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Fo(){return(SI()||Oa()||_d())&&!AI()&&Ed()&&!Za()}function bd(){return _d()&&typeof document<"u"}async function DI(){return bd()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},TI);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function RI(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le={LOCAL:"local",NONE:"none",SESSION:"session"},Ar=w,Td="persistence";function PI(n,e){if(Ar(Object.values(Le).includes(e),n,"invalid-persistence-type"),$i()){Ar(e!==Le.SESSION,n,"unsupported-persistence-type");return}if(xa()){Ar(e===Le.NONE,n,"unsupported-persistence-type");return}if(Za()){Ar(e===Le.NONE||e===Le.LOCAL&&Kr(),n,"unsupported-persistence-type");return}Ar(e===Le.NONE||Ed(),n,"unsupported-persistence-type")}async function na(n){await n._initializationPromise;const e=Sd(),t=en(Td,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function xI(n,e){const t=Sd();if(!t)return[];const r=en(Td,n,e);switch(t.getItem(r)){case Le.NONE:return[Jn];case Le.LOCAL:return[Xr,sn];case Le.SESSION:return[sn];default:return[]}}function Sd(){var n;try{return((n=RI())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=w;class At{constructor(){this.browserResolver=Me(Qw),this.cordovaResolver=Me(II),this.underlyingResolver=null,this._redirectPersistence=sn,this._completeRedirectFn=eo}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,s)}async _openRedirect(e,t,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,s)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return bd()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return OI(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await DI();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(n){return n.unwrap()}function LI(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MI(n){return kd(n)}function FI(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const s=e;s.resolver=new UI(n,Iv(n,e))}else if(r){const s=kd(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function kd(n){const{_tokenResponse:e}=n instanceof Ue?n.customData:n;if(!e)return null;if(!(n instanceof Ue)&&"temporaryProof"in e&&"phoneNumber"in e)return on.credentialFromResult(n);const t=e.providerId;if(!t||t===Sr.PASSWORD)return null;let r;switch(t){case Sr.GOOGLE:r=Je;break;case Sr.FACEBOOK:r=Ye;break;case Sr.GITHUB:r=Qe;break;case Sr.TWITTER:r=Xe;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?t.startsWith("saml.")?Qn._create(t,a):st._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:s,accessToken:i}):new Kn(t).credential({idToken:s,accessToken:i,rawNonce:c})}return n instanceof Ue?r.credentialFromError(n):r.credentialFromResult(n)}function xe(n,e){return e.catch(t=>{throw t instanceof Ue&&FI(n,t),t}).then(t=>{const r=t.operationType,s=t.user;return{operationType:r,credential:MI(t),additionalUserInfo:wv(t),user:ct.getOrCreate(s)}})}async function ra(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>xe(n,t.confirm(r))}}class UI{constructor(e,t){this.resolver=t,this.auth=LI(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return xe(Ad(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this._delegate=e,this.multiFactor=Tv(e)}static getOrCreate(e){return ct.USER_MAP.has(e)||ct.USER_MAP.set(e,new ct(e)),ct.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return xe(this.auth,Zh(this._delegate,e))}async linkWithPhoneNumber(e,t){return ra(this.auth,rw(this._delegate,e,t))}async linkWithPopup(e){return xe(this.auth,dw(this._delegate,e,At))}async linkWithRedirect(e){return await na(he(this.auth)),_w(this._delegate,e,At)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return xe(this.auth,ed(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ra(this.auth,sw(this._delegate,e,t))}reauthenticateWithPopup(e){return xe(this.auth,hw(this._delegate,e,At))}async reauthenticateWithRedirect(e){return await na(he(this.auth)),ww(this._delegate,e,At)}sendEmailVerification(e){return cv(this._delegate,e)}async unlink(e){return await Hy(this._delegate,e),this}updateEmail(e){return dv(this._delegate,e)}updatePassword(e){return fv(this._delegate,e)}updatePhoneNumber(e){return iw(this._delegate,e)}updateProfile(e){return hv(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return uv(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}ct.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=w;class sa{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;kr(r,"invalid-api-key",{appName:e.name}),kr(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?At:void 0;this._delegate=t.initialize({options:{persistence:VI(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(ny),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?ct.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Ay(this._delegate,e,t)}applyActionCode(e){return Zy(this._delegate,e)}checkActionCode(e){return td(this._delegate,e)}confirmPasswordReset(e,t){return Xy(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return xe(this._delegate,tv(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return av(this._delegate,e)}isSignInWithEmailLink(e){return sv(this._delegate,e)}async getRedirectResult(){kr(Fo(),this._delegate,"operation-not-supported-in-this-environment");const e=await bw(this._delegate,At);return e?xe(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){_I(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:s,error:i,complete:o}=zu(e,t,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,t,r){const{next:s,error:i,complete:o}=zu(e,t,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,t){return rv(this._delegate,e,t)}sendPasswordResetEmail(e,t){return Qy(this._delegate,e,t||void 0)}async setPersistence(e){PI(this._delegate,e);let t;switch(e){case Le.SESSION:t=sn;break;case Le.LOCAL:t=await Me(Xr)._isAvailable()?Xr:za;break;case Le.NONE:t=Jn;break;default:return Ee("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return xe(this._delegate,zy(this._delegate))}signInWithCredential(e){return xe(this._delegate,Hi(this._delegate,e))}signInWithCustomToken(e){return xe(this._delegate,Jy(this._delegate,e))}signInWithEmailAndPassword(e,t){return xe(this._delegate,nv(this._delegate,e,t))}signInWithEmailLink(e,t){return xe(this._delegate,iv(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ra(this._delegate,nw(this._delegate,e,t))}async signInWithPopup(e){return kr(Fo(),this._delegate,"operation-not-supported-in-this-environment"),xe(this._delegate,lw(this._delegate,e,At))}async signInWithRedirect(e){return kr(Fo(),this._delegate,"operation-not-supported-in-this-environment"),await na(this._delegate),yw(this._delegate,e,At)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return ev(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}sa.Persistence=Le;function zu(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const s=r;return{next:o=>s(o&&ct.getOrCreate(o)),error:e,complete:t}}function VI(n,e){const t=xI(n,e);if(typeof self<"u"&&!t.includes(Xr)&&t.push(Xr),typeof window<"u")for(const r of[za,sn])t.includes(r)||t.push(r);return t.includes(Jn)||t.push(Jn),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.providerId="phone",this._delegate=new on(Ad(rn.auth()))}static credential(e,t){return on.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}ec.PHONE_SIGN_IN_METHOD=on.PHONE_SIGN_IN_METHOD;ec.PROVIDER_ID=on.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI=w;class BI{constructor(e,t,r=rn.app()){var s;qI((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new ew(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I="auth-compat";function jI(n){n.INTERNAL.registerComponent(new rt($I,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new sa(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:xn.EMAIL_SIGNIN,PASSWORD_RESET:xn.PASSWORD_RESET,RECOVER_EMAIL:xn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:xn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:xn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:xn.VERIFY_EMAIL}},EmailAuthProvider:Ut,FacebookAuthProvider:Ye,GithubAuthProvider:Qe,GoogleAuthProvider:Je,OAuthProvider:Kn,SAMLAuthProvider:yi,PhoneAuthProvider:ec,PhoneMultiFactorGenerator:Id,RecaptchaVerifier:BI,TwitterAuthProvider:Xe,Auth:sa,AuthCredential:pr,Error:Ue}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(EI,bI)}jI(rn);var GI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},E,tc=tc||{},N=GI||self;function Ei(){}function ia(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function to(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function KI(n,e,t){return n.call.apply(n.bind,arguments)}function WI(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Ie(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ie=KI:Ie=WI,Ie.apply(null,arguments)}function Gs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function be(n,e){function t(){}t.prototype=e.prototype,n.Z=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Vb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Vt(){this.s=this.s,this.o=this.o}var zI=0;Vt.prototype.s=!1;Vt.prototype.na=function(){!this.s&&(this.s=!0,this.M(),zI!=0)};Vt.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nd=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1},Cd=Array.prototype.forEach?function(n,e,t){Array.prototype.forEach.call(n,e,t)}:function(n,e,t){const r=n.length,s=typeof n=="string"?n.split(""):n;for(let i=0;i<r;i++)i in s&&e.call(t,s[i],i,n)};function HI(n){e:{var e=q_;const t=n.length,r=typeof n=="string"?n.split(""):n;for(let s=0;s<t;s++)if(s in r&&e.call(void 0,r[s],s,n)){e=s;break e}e=-1}return 0>e?null:typeof n=="string"?n.charAt(e):n[e]}function Hu(n){return Array.prototype.concat.apply([],arguments)}function nc(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function bi(n){return/^[\s\xa0]*$/.test(n)}var Yu=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function De(n,e){return n.indexOf(e)!=-1}function Uo(n,e){return n<e?-1:n>e?1:0}var Re;e:{var Ju=N.navigator;if(Ju){var Qu=Ju.userAgent;if(Qu){Re=Qu;break e}}Re=""}function rc(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Dd(n){const e={};for(const t in n)e[t]=n[t];return e}var Xu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Rd(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Xu.length;i++)t=Xu[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function sc(n){return sc[" "](n),n}sc[" "]=Ei;function YI(n){var e=XI;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var JI=De(Re,"Opera"),Xn=De(Re,"Trident")||De(Re,"MSIE"),Pd=De(Re,"Edge"),oa=Pd||Xn,xd=De(Re,"Gecko")&&!(De(Re.toLowerCase(),"webkit")&&!De(Re,"Edge"))&&!(De(Re,"Trident")||De(Re,"MSIE"))&&!De(Re,"Edge"),QI=De(Re.toLowerCase(),"webkit")&&!De(Re,"Edge");function Od(){var n=N.document;return n?n.documentMode:void 0}var Ti;e:{var Vo="",qo=function(){var n=Re;if(xd)return/rv:([^\);]+)(\)|;)/.exec(n);if(Pd)return/Edge\/([\d\.]+)/.exec(n);if(Xn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(QI)return/WebKit\/(\S+)/.exec(n);if(JI)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(qo&&(Vo=qo?qo[1]:""),Xn){var Bo=Od();if(Bo!=null&&Bo>parseFloat(Vo)){Ti=String(Bo);break e}}Ti=Vo}var XI={};function ZI(){return YI(function(){let n=0;const e=Yu(String(Ti)).split("."),t=Yu("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=Uo(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Uo(s[2].length==0,i[2].length==0)||Uo(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var aa;if(N.document&&Xn){var Zu=Od();aa=Zu||parseInt(Ti,10)||void 0}else aa=void 0;var e_=aa,t_=function(){if(!N.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{N.addEventListener("test",Ei,e),N.removeEventListener("test",Ei,e)}catch{}return n}();function Se(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Se.prototype.h=function(){this.defaultPrevented=!0};function Zr(n,e){if(Se.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(xd){e:{try{sc(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:n_[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Zr.Z.h.call(this)}}be(Zr,Se);var n_={2:"touch",3:"pen",4:"mouse"};Zr.prototype.h=function(){Zr.Z.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var no="closure_listenable_"+(1e6*Math.random()|0),r_=0;function s_(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ia=s,this.key=++r_,this.ca=this.fa=!1}function ro(n){n.ca=!0,n.listener=null,n.proxy=null,n.src=null,n.ia=null}function so(n){this.src=n,this.g={},this.h=0}so.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=ua(n,e,r,s);return-1<o?(e=n[o],t||(e.fa=!1)):(e=new s_(e,this.src,i,!!r,s),e.fa=t,n.push(e)),e};function ca(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Nd(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(ro(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ua(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ca&&i.listener==e&&i.capture==!!t&&i.ia==r)return s}return-1}var ic="closure_lm_"+(1e6*Math.random()|0),$o={};function Ld(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)Ld(n,e[i],t,r,s);return null}return t=Ud(t),n&&n[no]?n.N(e,t,to(r)?!!r.capture:!1,s):i_(n,e,t,!1,r,s)}function i_(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=to(s)?!!s.capture:!!s,a=ac(n);if(a||(n[ic]=a=new so(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=o_(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)t_||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(Fd(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function o_(){function n(t){return e.call(n.src,n.listener,t)}var e=a_;return n}function Md(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)Md(n,e[i],t,r,s);else r=to(r)?!!r.capture:!!r,t=Ud(t),n&&n[no]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=ua(i,t,r,s),-1<t&&(ro(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=ac(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ua(e,t,r,s)),(t=-1<n?e[n]:null)&&oc(t))}function oc(n){if(typeof n!="number"&&n&&!n.ca){var e=n.src;if(e&&e[no])ca(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Fd(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=ac(e))?(ca(t,n),t.h==0&&(t.src=null,e[ic]=null)):ro(n)}}}function Fd(n){return n in $o?$o[n]:$o[n]="on"+n}function a_(n,e){if(n.ca)n=!0;else{e=new Zr(e,this);var t=n.listener,r=n.ia||n.src;n.fa&&oc(n),n=t.call(r,e)}return n}function ac(n){return n=n[ic],n instanceof so?n:null}var jo="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ud(n){return typeof n=="function"?n:(n[jo]||(n[jo]=function(e){return n.handleEvent(e)}),n[jo])}function de(){Vt.call(this),this.i=new so(this),this.P=this,this.I=null}be(de,Vt);de.prototype[no]=!0;de.prototype.removeEventListener=function(n,e,t,r){Md(this,n,e,t,r)};function _e(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new Se(e,n);else if(e instanceof Se)e.target=e.target||n;else{var s=e;e=new Se(r,n),Rd(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=Ks(o,r,!0,e)&&s}if(o=e.g=n,s=Ks(o,r,!0,e)&&s,s=Ks(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=Ks(o,r,!1,e)&&s}de.prototype.M=function(){if(de.Z.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)ro(t[r]);delete n.g[e],n.h--}}this.I=null};de.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};de.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Ks(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ca&&o.capture==t){var a=o.listener,c=o.ia||o.src;o.fa&&ca(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var cc=N.JSON.stringify;function c_(){var n=qd;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class u_{constructor(){this.h=this.g=null}add(e,t){const r=Vd.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Vd=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new l_,n=>n.reset());class l_{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function h_(n){N.setTimeout(()=>{throw n},0)}function uc(n,e){la||d_(),ha||(la(),ha=!0),qd.add(n,e)}var la;function d_(){var n=N.Promise.resolve(void 0);la=function(){n.then(f_)}}var ha=!1,qd=new u_;function f_(){for(var n;n=c_();){try{n.h.call(n.g)}catch(t){h_(t)}var e=Vd;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ha=!1}function io(n,e){de.call(this),this.h=n||1,this.g=e||N,this.j=Ie(this.kb,this),this.l=Date.now()}be(io,de);E=io.prototype;E.da=!1;E.S=null;E.kb=function(){if(this.da){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-n):(this.S&&(this.g.clearTimeout(this.S),this.S=null),_e(this,"tick"),this.da&&(lc(this),this.start()))}};E.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function lc(n){n.da=!1,n.S&&(n.g.clearTimeout(n.S),n.S=null)}E.M=function(){io.Z.M.call(this),lc(this),delete this.g};function hc(n,e,t){if(typeof n=="function")t&&(n=Ie(n,t));else if(n&&typeof n.handleEvent=="function")n=Ie(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:N.setTimeout(n,e||0)}function Bd(n){n.g=hc(()=>{n.g=null,n.i&&(n.i=!1,Bd(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class p_ extends Vt{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Bd(this)}M(){super.M(),this.g&&(N.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function es(n){Vt.call(this),this.h=n,this.g={}}be(es,Vt);var el=[];function $d(n,e,t,r){Array.isArray(t)||(t&&(el[0]=t.toString()),t=el);for(var s=0;s<t.length;s++){var i=Ld(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function jd(n){rc(n.g,function(e,t){this.g.hasOwnProperty(t)&&oc(e)},n),n.g={}}es.prototype.M=function(){es.Z.M.call(this),jd(this)};es.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function oo(){this.g=!0}oo.prototype.Aa=function(){this.g=!1};function m_(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function g_(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Bn(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+v_(n,t)+(r?" "+r:"")})}function y_(n,e){n.info(function(){return"TIMEOUT: "+e})}oo.prototype.info=function(){};function v_(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return cc(t)}catch{return e}}var En={},tl=null;function ao(){return tl=tl||new de}En.Ma="serverreachability";function Gd(n){Se.call(this,En.Ma,n)}be(Gd,Se);function ts(n){const e=ao();_e(e,new Gd(e))}En.STAT_EVENT="statevent";function Kd(n,e){Se.call(this,En.STAT_EVENT,n),this.stat=e}be(Kd,Se);function Pe(n){const e=ao();_e(e,new Kd(e,n))}En.Na="timingevent";function Wd(n,e){Se.call(this,En.Na,n),this.size=e}be(Wd,Se);function bs(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return N.setTimeout(function(){n()},e)}var co={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},zd={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function dc(){}dc.prototype.h=null;function nl(n){return n.h||(n.h=n.i())}function Hd(){}var Ts={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function fc(){Se.call(this,"d")}be(fc,Se);function pc(){Se.call(this,"c")}be(pc,Se);var da;function uo(){}be(uo,dc);uo.prototype.g=function(){return new XMLHttpRequest};uo.prototype.i=function(){return{}};da=new uo;function Ss(n,e,t,r){this.l=n,this.j=e,this.m=t,this.X=r||1,this.V=new es(this),this.P=w_,n=oa?125:void 0,this.W=new io(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new Yd}function Yd(){this.i=null,this.g="",this.h=!1}var w_=45e3,fa={},Si={};E=Ss.prototype;E.setTimeout=function(n){this.P=n};function pa(n,e,t){n.K=1,n.v=ho(dt(e)),n.s=t,n.U=!0,Jd(n,null)}function Jd(n,e){n.F=Date.now(),As(n),n.A=dt(n.v);var t=n.A,r=n.X;Array.isArray(r)||(r=[String(r)]),rf(t.h,"t",r),n.C=0,t=n.l.H,n.h=new Yd,n.g=Tf(n.l,t?e:null,!n.s),0<n.O&&(n.L=new p_(Ie(n.Ia,n,n.g),n.O)),$d(n.V,n.g,"readystatechange",n.gb),e=n.H?Dd(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.ea(n.A,n.u,n.s,e)):(n.u="GET",n.g.ea(n.A,n.u,null,e)),ts(),m_(n.j,n.u,n.A,n.m,n.X,n.s)}E.gb=function(n){n=n.target;const e=this.L;e&&ut(n)==3?e.l():this.Ia(n)};E.Ia=function(n){try{if(n==this.g)e:{const l=ut(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>l)&&(l!=3||oa||this.g&&(this.h.h||this.g.ga()||ol(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?ts(3):ts(2)),lo(this);var t=this.g.ba();this.N=t;t:if(Qd(this)){var r=ol(this.g);n="";var s=r.length,i=ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Yt(this),Ur(this);var o="";break t}this.h.i=new N.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=t==200,g_(this.j,this.u,this.A,this.m,this.X,l,t),this.i){if(this.$&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!bi(a)){var u=a;break t}}u=null}if(t=u)Bn(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,ma(this,t);else{this.i=!1,this.o=3,Pe(12),Yt(this),Ur(this);break e}}this.U?(Xd(this,l,o),oa&&this.i&&l==3&&($d(this.V,this.W,"tick",this.fb),this.W.start())):(Bn(this.j,this.m,o,null),ma(this,o)),l==4&&Yt(this),this.i&&!this.I&&(l==4?If(this.l,this):(this.i=!1,As(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pe(12)):(this.o=0,Pe(13)),Yt(this),Ur(this)}}}catch{}finally{}};function Qd(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Ba:!1}function Xd(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=I_(n,t),s==Si){e==4&&(n.o=4,Pe(14),r=!1),Bn(n.j,n.m,null,"[Incomplete Response]");break}else if(s==fa){n.o=4,Pe(15),Bn(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Bn(n.j,n.m,s,null),ma(n,s);Qd(n)&&s!=Si&&s!=fa&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Pe(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.aa&&(n.aa=!0,e=n.l,e.g==n&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+t.length),bc(e),e.L=!0,Pe(11))):(Bn(n.j,n.m,t,"[Invalid Chunked Response]"),Yt(n),Ur(n))}E.fb=function(){if(this.g){var n=ut(this.g),e=this.g.ga();this.C<e.length&&(lo(this),Xd(this,n,e),this.i&&n!=4&&As(this))}};function I_(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Si:(t=Number(e.substring(t,r)),isNaN(t)?fa:(r+=1,r+t>e.length?Si:(e=e.substr(r,t),n.C=r+t,e)))}E.cancel=function(){this.I=!0,Yt(this)};function As(n){n.Y=Date.now()+n.P,Zd(n,n.P)}function Zd(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=bs(Ie(n.eb,n),e)}function lo(n){n.B&&(N.clearTimeout(n.B),n.B=null)}E.eb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(y_(this.j,this.A),this.K!=2&&(ts(),Pe(17)),Yt(this),this.o=2,Ur(this)):Zd(this,this.Y-n)};function Ur(n){n.l.G==0||n.I||If(n.l,n)}function Yt(n){lo(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,lc(n.W),jd(n.V),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function ma(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||ga(t.i,n))){if(t.I=n.N,!n.J&&ga(t.i,n)&&t.G==3){try{var r=t.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Ci(t),mo(t);else break e;Ec(t),Pe(18)}}else t.ta=s[1],0<t.ta-t.U&&37500>s[2]&&t.N&&t.A==0&&!t.v&&(t.v=bs(Ie(t.ab,t),6e3));if(1>=af(t.i)&&t.ka){try{t.ka()}catch{}t.ka=void 0}}else Jt(t,11)}else if((n.J||t.g==n)&&Ci(t),!bi(e))for(s=t.Ca.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.U=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.J=u[1],t.la=u[2];const l=u[3];l!=null&&(t.ma=l,t.h.info("VER="+t.ma));const h=u[4];h!=null&&(t.za=h,t.h.info("SVER="+t.za));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.K=r,t.h.info("backChannelRequestTimeoutMs_="+r)),r=t;const m=n.g;if(m){const g=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;!i.g&&(De(g,"spdy")||De(g,"quic")||De(g,"h2"))&&(i.j=i.l,i.g=new Set,i.h&&(yc(i,i.h),i.h=null))}if(r.D){const T=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.sa=T,j(r.F,r.D,T))}}t.G=3,t.j&&t.j.xa(),t.$&&(t.O=Date.now()-n.F,t.h.info("Handshake RTT: "+t.O+"ms")),r=t;var o=n;if(r.oa=bf(r,r.H?r.la:null,r.W),o.J){cf(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(lo(a),As(a)),r.g=o}else vf(r);0<t.l.length&&go(t)}else u[0]!="stop"&&u[0]!="close"||Jt(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Jt(t,7):_c(t):u[0]!="noop"&&t.j&&t.j.wa(u),t.A=0)}}ts(4)}catch{}}function __(n){if(n.R&&typeof n.R=="function")return n.R();if(typeof n=="string")return n.split("");if(ia(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function mc(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(ia(n)||typeof n=="string")Cd(n,e,void 0);else{if(n.T&&typeof n.T=="function")var t=n.T();else if(n.R&&typeof n.R=="function")t=void 0;else if(ia(n)||typeof n=="string"){t=[];for(var r=n.length,s=0;s<r;s++)t.push(s)}else for(s in t=[],r=0,n)t[r++]=s;r=__(n),s=r.length;for(var i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}}function gr(n,e){this.h={},this.g=[],this.i=0;var t=arguments.length;if(1<t){if(t%2)throw Error("Uneven number of arguments");for(var r=0;r<t;r+=2)this.set(arguments[r],arguments[r+1])}else if(n)if(n instanceof gr)for(t=n.T(),r=0;r<t.length;r++)this.set(t[r],n.get(t[r]));else for(r in n)this.set(r,n[r])}E=gr.prototype;E.R=function(){gc(this);for(var n=[],e=0;e<this.g.length;e++)n.push(this.h[this.g[e]]);return n};E.T=function(){return gc(this),this.g.concat()};function gc(n){if(n.i!=n.g.length){for(var e=0,t=0;e<n.g.length;){var r=n.g[e];cn(n.h,r)&&(n.g[t++]=r),e++}n.g.length=t}if(n.i!=n.g.length){var s={};for(t=e=0;e<n.g.length;)r=n.g[e],cn(s,r)||(n.g[t++]=r,s[r]=1),e++;n.g.length=t}}E.get=function(n,e){return cn(this.h,n)?this.h[n]:e};E.set=function(n,e){cn(this.h,n)||(this.i++,this.g.push(n)),this.h[n]=e};E.forEach=function(n,e){for(var t=this.T(),r=0;r<t.length;r++){var s=t[r],i=this.get(s);n.call(e,i,s,this)}};function cn(n,e){return Object.prototype.hasOwnProperty.call(n,e)}var ef=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function E_(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function un(n,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,n instanceof un){this.g=e!==void 0?e:n.g,Ai(this,n.j),this.s=n.s,ki(this,n.i),Ni(this,n.m),this.l=n.l,e=n.h;var t=new ns;t.i=e.i,e.g&&(t.g=new gr(e.g),t.h=e.h),rl(this,t),this.o=n.o}else n&&(t=String(n).match(ef))?(this.g=!!e,Ai(this,t[1]||"",!0),this.s=Vr(t[2]||""),ki(this,t[3]||"",!0),Ni(this,t[4]),this.l=Vr(t[5]||"",!0),rl(this,t[6]||"",!0),this.o=Vr(t[7]||"")):(this.g=!!e,this.h=new ns(null,this.g))}un.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Lr(e,sl,!0),":");var t=this.i;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Lr(e,sl,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.i&&t.charAt(0)!="/"&&n.push("/"),n.push(Lr(t,t.charAt(0)=="/"?k_:A_,!0))),(t=this.h.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Lr(t,C_)),n.join("")};function dt(n){return new un(n)}function Ai(n,e,t){n.j=t?Vr(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function ki(n,e,t){n.i=t?Vr(e,!0):e}function Ni(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function rl(n,e,t){e instanceof ns?(n.h=e,D_(n.h,n.g)):(t||(e=Lr(e,N_)),n.h=new ns(e,n.g))}function j(n,e,t){n.h.set(e,t)}function ho(n){return j(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function b_(n){return n instanceof un?dt(n):new un(n,void 0)}function T_(n,e,t,r){var s=new un(null,void 0);return n&&Ai(s,n),e&&ki(s,e),t&&Ni(s,t),r&&(s.l=r),s}function Vr(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Lr(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,S_),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function S_(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var sl=/[#\/\?@]/g,A_=/[#\?:]/g,k_=/[#\?]/g,N_=/[#\?@]/g,C_=/#/g;function ns(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function qt(n){n.g||(n.g=new gr,n.h=0,n.i&&E_(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}E=ns.prototype;E.add=function(n,e){qt(this),this.i=null,n=yr(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function tf(n,e){qt(n),e=yr(n,e),cn(n.g.h,e)&&(n.i=null,n.h-=n.g.get(e).length,n=n.g,cn(n.h,e)&&(delete n.h[e],n.i--,n.g.length>2*n.i&&gc(n)))}function nf(n,e){return qt(n),e=yr(n,e),cn(n.g.h,e)}E.forEach=function(n,e){qt(this),this.g.forEach(function(t,r){Cd(t,function(s){n.call(e,s,r,this)},this)},this)};E.T=function(){qt(this);for(var n=this.g.R(),e=this.g.T(),t=[],r=0;r<e.length;r++)for(var s=n[r],i=0;i<s.length;i++)t.push(e[r]);return t};E.R=function(n){qt(this);var e=[];if(typeof n=="string")nf(this,n)&&(e=Hu(e,this.g.get(yr(this,n))));else{n=this.g.R();for(var t=0;t<n.length;t++)e=Hu(e,n[t])}return e};E.set=function(n,e){return qt(this),this.i=null,n=yr(this,n),nf(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};E.get=function(n,e){return n?(n=this.R(n),0<n.length?String(n[0]):e):e};function rf(n,e,t){tf(n,e),0<t.length&&(n.i=null,n.g.set(yr(n,e),nc(t)),n.h+=t.length)}E.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var n=[],e=this.g.T(),t=0;t<e.length;t++){var r=e[t],s=encodeURIComponent(String(r));r=this.R(r);for(var i=0;i<r.length;i++){var o=s;r[i]!==""&&(o+="="+encodeURIComponent(String(r[i]))),n.push(o)}}return this.i=n.join("&")};function yr(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function D_(n,e){e&&!n.j&&(qt(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(tf(this,r),rf(this,s,t))},n)),n.j=e}var R_=class{constructor(n,e){this.h=n,this.g=e}};function sf(n){this.l=n||P_,N.PerformanceNavigationTiming?(n=N.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(N.g&&N.g.Ea&&N.g.Ea()&&N.g.Ea().Zb),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var P_=10;function of(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function af(n){return n.h?1:n.g?n.g.size:0}function ga(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function yc(n,e){n.g?n.g.add(e):n.h=e}function cf(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}sf.prototype.cancel=function(){if(this.i=uf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function uf(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return nc(n.i)}function vc(){}vc.prototype.stringify=function(n){return N.JSON.stringify(n,void 0)};vc.prototype.parse=function(n){return N.JSON.parse(n,void 0)};function x_(){this.g=new vc}function O_(n,e,t){const r=t||"";try{mc(n,function(s,i){let o=s;to(s)&&(o=cc(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function L_(n,e){const t=new oo;if(N.Image){const r=new Image;r.onload=Gs(Ws,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Gs(Ws,t,r,"TestLoadImage: error",!1,e),r.onabort=Gs(Ws,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Gs(Ws,t,r,"TestLoadImage: timeout",!1,e),N.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Ws(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ks(n){this.l=n.$b||null,this.j=n.ib||!1}be(ks,dc);ks.prototype.g=function(){return new fo(this.l,this.j)};ks.prototype.i=function(n){return function(){return n}}({});function fo(n,e){de.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=wc,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}be(fo,de);var wc=0;E=fo.prototype;E.open=function(n,e){if(this.readyState!=wc)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,rs(this)};E.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||N).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};E.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ns(this)),this.readyState=wc};E.Va=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,rs(this)),this.g&&(this.readyState=3,rs(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof N.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;lf(this)}else n.text().then(this.Ua.bind(this),this.ha.bind(this))};function lf(n){n.j.read().then(n.Sa.bind(n)).catch(n.ha.bind(n))}E.Sa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Ns(this):rs(this),this.readyState==3&&lf(this)}};E.Ua=function(n){this.g&&(this.response=this.responseText=n,Ns(this))};E.Ta=function(n){this.g&&(this.response=n,Ns(this))};E.ha=function(){this.g&&Ns(this)};function Ns(n){n.readyState=4,n.l=null,n.j=null,n.A=null,rs(n)}E.setRequestHeader=function(n,e){this.v.append(n,e)};E.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};E.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function rs(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(fo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var M_=N.JSON.parse;function te(n){de.call(this),this.headers=new gr,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=hf,this.K=this.L=!1}be(te,de);var hf="",F_=/^https?$/i,U_=["POST","PUT"];E=te.prototype;E.ea=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():da.g(),this.C=this.u?nl(this.u):nl(da),this.g.onreadystatechange=Ie(this.Fa,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){il(this,i);return}n=t||"";const s=new gr(this.headers);r&&mc(r,function(i,o){s.set(o,i)}),r=HI(s.T()),t=N.FormData&&n instanceof N.FormData,!(0<=Nd(U_,e))||r||t||s.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),s.forEach(function(i,o){this.g.setRequestHeader(o,i)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{pf(this),0<this.B&&((this.K=V_(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ie(this.pa,this)):this.A=hc(this.pa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){il(this,i)}};function V_(n){return Xn&&ZI()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}function q_(n){return n.toLowerCase()=="content-type"}E.pa=function(){typeof tc<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,_e(this,"timeout"),this.abort(8))};function il(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,df(n),po(n)}function df(n){n.D||(n.D=!0,_e(n,"complete"),_e(n,"error"))}E.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,_e(this,"complete"),_e(this,"abort"),po(this))};E.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),po(this,!0)),te.Z.M.call(this)};E.Fa=function(){this.s||(this.F||this.v||this.l?ff(this):this.cb())};E.cb=function(){ff(this)};function ff(n){if(n.h&&typeof tc<"u"&&(!n.C[1]||ut(n)!=4||n.ba()!=2)){if(n.v&&ut(n)==4)hc(n.Fa,0,n);else if(_e(n,"readystatechange"),ut(n)==4){n.h=!1;try{const a=n.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(ef)[1]||null;if(!s&&N.self&&N.self.location){var i=N.self.location.protocol;s=i.substr(0,i.length-1)}r=!F_.test(s?s.toLowerCase():"")}t=r}if(t)_e(n,"complete"),_e(n,"success");else{n.m=6;try{var o=2<ut(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.ba()+"]",df(n)}}finally{po(n)}}}}function po(n,e){if(n.g){pf(n);const t=n.g,r=n.C[0]?Ei:null;n.g=null,n.C=null,e||_e(n,"ready");try{t.onreadystatechange=r}catch{}}}function pf(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(N.clearTimeout(n.A),n.A=null)}function ut(n){return n.g?n.g.readyState:0}E.ba=function(){try{return 2<ut(this)?this.g.status:-1}catch{return-1}};E.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};E.Qa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),M_(e)}};function ol(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case hf:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}E.Da=function(){return this.m};E.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function B_(n){let e="";return rc(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Ic(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=B_(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):j(n,e,t))}function Nr(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function mf(n){this.za=0,this.l=[],this.h=new oo,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Nr("failFast",!1,n),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Nr("baseRetryDelayMs",5e3,n),this.$a=Nr("retryDelaySeedMs",1e4,n),this.Ya=Nr("forwardChannelMaxRetries",2,n),this.ra=Nr("forwardChannelRequestTimeoutMs",2e4,n),this.qa=n&&n.xmlHttpFactory||void 0,this.Ba=n&&n.Yb||!1,this.K=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.J="",this.i=new sf(n&&n.concurrentRequestLimit),this.Ca=new x_,this.ja=n&&n.fastHandshake||!1,this.Ra=n&&n.Wb||!1,n&&n.Aa&&this.h.Aa(),n&&n.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&n&&n.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!n||n.Xb!==!1}E=mf.prototype;E.ma=8;E.G=1;function _c(n){if(gf(n),n.G==3){var e=n.V++,t=dt(n.F);j(t,"SID",n.J),j(t,"RID",e),j(t,"TYPE","terminate"),Cs(n,t),e=new Ss(n,n.h,e,void 0),e.K=2,e.v=ho(dt(t)),t=!1,N.navigator&&N.navigator.sendBeacon&&(t=N.navigator.sendBeacon(e.v.toString(),"")),!t&&N.Image&&(new Image().src=e.v,t=!0),t||(e.g=Tf(e.l,null),e.g.ea(e.v)),e.F=Date.now(),As(e)}Ef(n)}E.hb=function(n){try{this.h.info("Origin Trials invoked: "+n)}catch{}};function mo(n){n.g&&(bc(n),n.g.cancel(),n.g=null)}function gf(n){mo(n),n.u&&(N.clearTimeout(n.u),n.u=null),Ci(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&N.clearTimeout(n.m),n.m=null)}function Go(n,e){n.l.push(new R_(n.Za++,e)),n.G==3&&go(n)}function go(n){of(n.i)||n.m||(n.m=!0,uc(n.Ha,n),n.C=0)}function $_(n,e){return af(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.l=e.D.concat(n.l),!0):n.G==1||n.G==2||n.C>=(n.Xa?0:n.Ya)?!1:(n.m=bs(Ie(n.Ha,n,e),_f(n,n.C)),n.C++,!0)}E.Ha=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.V=Math.floor(1e5*Math.random()),n=this.V++;const s=new Ss(this,this.h,n,void 0);let i=this.s;if(this.P&&(i?(i=Dd(i),Rd(i,this.P)):i=this.P),this.o===null&&(s.H=i),this.ja)e:{for(var e=0,t=0;t<this.l.length;t++){t:{var r=this.l[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.l.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=yf(this,s,e),t=dt(this.F),j(t,"RID",n),j(t,"CVER",22),this.D&&j(t,"X-HTTP-Session-Id",this.D),Cs(this,t),this.o&&i&&Ic(t,this.o,i),yc(this.i,s),this.Ra&&j(t,"TYPE","init"),this.ja?(j(t,"$req",e),j(t,"SID","null"),s.$=!0,pa(s,t,null)):pa(s,t,e),this.G=2}}else this.G==3&&(n?al(this,n):this.l.length==0||of(this.i)||al(this))};function al(n,e){var t;e?t=e.m:t=n.V++;const r=dt(n.F);j(r,"SID",n.J),j(r,"RID",t),j(r,"AID",n.U),Cs(n,r),n.o&&n.s&&Ic(r,n.o,n.s),t=new Ss(n,n.h,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.l=e.D.concat(n.l)),e=yf(n,t,1e3),t.setTimeout(Math.round(.5*n.ra)+Math.round(.5*n.ra*Math.random())),yc(n.i,t),pa(t,r,e)}function Cs(n,e){n.j&&mc({},function(t,r){j(e,r,t)})}function yf(n,e,t){t=Math.min(n.l.length,t);var r=n.j?Ie(n.j.Oa,n.j,n):null;e:{var s=n.l;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{O_(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.l.splice(0,t),e.D=n,r}function vf(n){n.g||n.u||(n.Y=1,uc(n.Ga,n),n.A=0)}function Ec(n){return n.g||n.u||3<=n.A?!1:(n.Y++,n.u=bs(Ie(n.Ga,n),_f(n,n.A)),n.A++,!0)}E.Ga=function(){if(this.u=null,wf(this),this.$&&!(this.L||this.g==null||0>=this.O)){var n=2*this.O;this.h.info("BP detection timer enabled: "+n),this.B=bs(Ie(this.bb,this),n)}};E.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pe(10),mo(this),wf(this))};function bc(n){n.B!=null&&(N.clearTimeout(n.B),n.B=null)}function wf(n){n.g=new Ss(n,n.h,"rpc",n.Y),n.o===null&&(n.g.H=n.s),n.g.O=0;var e=dt(n.oa);j(e,"RID","rpc"),j(e,"SID",n.J),j(e,"CI",n.N?"0":"1"),j(e,"AID",n.U),Cs(n,e),j(e,"TYPE","xmlhttp"),n.o&&n.s&&Ic(e,n.o,n.s),n.K&&n.g.setTimeout(n.K);var t=n.g;n=n.la,t.K=1,t.v=ho(dt(e)),t.s=null,t.U=!0,Jd(t,n)}E.ab=function(){this.v!=null&&(this.v=null,mo(this),Ec(this),Pe(19))};function Ci(n){n.v!=null&&(N.clearTimeout(n.v),n.v=null)}function If(n,e){var t=null;if(n.g==e){Ci(n),bc(n),n.g=null;var r=2}else if(ga(n.i,e))t=e.D,cf(n.i,e),r=1;else return;if(n.I=e.N,n.G!=0){if(e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=ao(),_e(r,new Wd(r,t)),go(n)}else vf(n);else if(s=e.o,s==3||s==0&&0<n.I||!(r==1&&$_(n,e)||r==2&&Ec(n)))switch(t&&0<t.length&&(e=n.i,e.i=e.i.concat(t)),s){case 1:Jt(n,5);break;case 4:Jt(n,10);break;case 3:Jt(n,6);break;default:Jt(n,2)}}}function _f(n,e){let t=n.Pa+Math.floor(Math.random()*n.$a);return n.j||(t*=2),t*e}function Jt(n,e){if(n.h.info("Error code "+e),e==2){var t=null;n.j&&(t=null);var r=Ie(n.jb,n);t||(t=new un("//www.google.com/images/cleardot.gif"),N.location&&N.location.protocol=="http"||Ai(t,"https"),ho(t)),L_(t.toString(),r)}else Pe(2);n.G=0,n.j&&n.j.va(e),Ef(n),gf(n)}E.jb=function(n){n?(this.h.info("Successfully pinged google.com"),Pe(2)):(this.h.info("Failed to ping google.com"),Pe(1))};function Ef(n){n.G=0,n.I=-1,n.j&&((uf(n.i).length!=0||n.l.length!=0)&&(n.i.i.length=0,nc(n.l),n.l.length=0),n.j.ua())}function bf(n,e,t){let r=b_(t);if(r.i!="")e&&ki(r,e+"."+r.i),Ni(r,r.m);else{const s=N.location;r=T_(s.protocol,e?e+"."+s.hostname:s.hostname,+s.port,t)}return n.aa&&rc(n.aa,function(s,i){j(r,i,s)}),e=n.D,t=n.sa,e&&t&&j(r,e,t),j(r,"VER",n.ma),Cs(n,r),r}function Tf(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Ba&&!n.qa?new te(new ks({ib:!0})):new te(n.qa),e.L=n.H,e}function Sf(){}E=Sf.prototype;E.xa=function(){};E.wa=function(){};E.va=function(){};E.ua=function(){};E.Oa=function(){};function Di(){if(Xn&&!(10<=Number(e_)))throw Error("Environmental error: no available transport.")}Di.prototype.g=function(n,e){return new Ve(n,e)};function Ve(n,e){de.call(this),this.g=new mf(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.P=n,(n=e&&e.httpHeadersOverwriteParam)&&!bi(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!bi(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new vr(this)}be(Ve,de);Ve.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;n.Wa&&(n.h.info("Origin Trials enabled."),uc(Ie(n.hb,n,e))),Pe(0),n.W=e,n.aa=t||{},n.N=n.X,n.F=bf(n,null,n.W),go(n)};Ve.prototype.close=function(){_c(this.g)};Ve.prototype.u=function(n){if(typeof n=="string"){var e={};e.__data__=n,Go(this.g,e)}else this.v?(e={},e.__data__=cc(n),Go(this.g,e)):Go(this.g,n)};Ve.prototype.M=function(){this.g.j=null,delete this.j,_c(this.g),delete this.g,Ve.Z.M.call(this)};function Af(n){fc.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}be(Af,fc);function kf(){pc.call(this),this.status=1}be(kf,pc);function vr(n){this.g=n}be(vr,Sf);vr.prototype.xa=function(){_e(this.g,"a")};vr.prototype.wa=function(n){_e(this.g,new Af(n))};vr.prototype.va=function(n){_e(this.g,new kf)};vr.prototype.ua=function(){_e(this.g,"b")};Di.prototype.createWebChannel=Di.prototype.g;Ve.prototype.send=Ve.prototype.u;Ve.prototype.open=Ve.prototype.m;Ve.prototype.close=Ve.prototype.close;co.NO_ERROR=0;co.TIMEOUT=8;co.HTTP_ERROR=6;zd.COMPLETE="complete";Hd.EventType=Ts;Ts.OPEN="a";Ts.CLOSE="b";Ts.ERROR="c";Ts.MESSAGE="d";de.prototype.listen=de.prototype.N;te.prototype.listenOnce=te.prototype.O;te.prototype.getLastError=te.prototype.La;te.prototype.getLastErrorCode=te.prototype.Da;te.prototype.getStatus=te.prototype.ba;te.prototype.getResponseJson=te.prototype.Qa;te.prototype.getResponseText=te.prototype.ga;te.prototype.send=te.prototype.ea;var j_=function(){return new Di},G_=function(){return ao()},Ko=co,K_=zd,W_=En,cl={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},z_=ks,zs=Hd,H_=te,Y_={};const ul="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ge.UNAUTHENTICATED=new ge(null),ge.GOOGLE_CREDENTIALS=new ge("google-credentials-uid"),ge.FIRST_PARTY=new ge("first-party-uid"),ge.MOCK_USER=new ge("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wr="9.6.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt=new ji("@firebase/firestore");function ya(){return Rt.logLevel}function J_(n){Rt.setLogLevel(n)}function v(n,...e){if(Rt.logLevel<=L.DEBUG){const t=e.map(Tc);Rt.debug(`Firestore (${wr}): ${n}`,...t)}}function Z(n,...e){if(Rt.logLevel<=L.ERROR){const t=e.map(Tc);Rt.error(`Firestore (${wr}): ${n}`,...t)}}function ss(n,...e){if(Rt.logLevel<=L.WARN){const t=e.map(Tc);Rt.warn(`Firestore (${wr}): ${n}`,...t)}}function Tc(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(n="Unexpected state"){const e=`FIRESTORE (${wr}) INTERNAL ASSERTION FAILED: `+n;throw Z(e),new Error(e)}function k(n,e){n||b()}function Q_(n,e){n||b()}function _(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class y extends Ue{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class X_{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(ge.UNAUTHENTICATED))}shutdown(){}}class Z_{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class eE{constructor(e){this.t=e,this.currentUser=ge.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new ue;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new ue,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{v("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(v("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ue)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(v("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(k(typeof r.accessToken=="string"),new Nf(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return k(e===null||typeof e=="string"),new ge(e)}}class tE{constructor(e,t,r){this.type="FirstParty",this.user=ge.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const s=e.auth.getAuthHeaderValueForFirstParty([]);s&&this.headers.set("Authorization",s),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class nE{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new tE(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(ge.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class sE{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const r=i=>{i.error!=null&&v("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.p;return this.p=i.token,v("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{v("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?s(i):v("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(k(typeof t.token=="string"),this.p=t.token,new rE(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.I(r),this.T=r=>t.writeSequenceNumber(r))}I(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iE(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe.A=-1;class Cf{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=iE(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function R(n,e){return n<e?-1:n>e?1:0}function Zn(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Df(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new y(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new y(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return J.fromMillis(Date.now())}static fromDate(e){return J.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new J(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.timestamp=e}static fromTimestamp(e){return new A(e)}static min(){return new A(new J(0,0))}static max(){return new A(new J(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ll(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function bn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Rf(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class is{constructor(e,t,r){t===void 0?t=0:t>e.length&&b(),r===void 0?r=e.length-t:r>e.length-t&&b(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return is.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof is?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class x extends is{construct(e,t,r){return new x(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new x(t)}static emptyPath(){return new x([])}}const oE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ae extends is{construct(e,t,r){return new ae(e,t,r)}static isValidIdentifier(e){return oE.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ae.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ae(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new y(f.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new y(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new y(f.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ae(t)}static emptyPath(){return new ae([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(e){this.fields=e,e.sort(ae.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Zn(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new se(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new se(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}se.EMPTY_BYTE_STRING=new se("");const cE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pt(n){if(k(!!n),typeof n=="string"){let e=0;const t=cE.exec(n);if(k(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:W(n.seconds),nanos:W(n.nanos)}}function W(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ln(n){return typeof n=="string"?se.fromBase64String(n):se.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){var e,t;return((t=(((e=n?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Pf(n){const e=n.mapValue.fields.__previous_value__;return Sc(e)?Pf(e):e}function os(n){const e=Pt(n.mapValue.fields.__local_write_time__.timestampValue);return new J(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class ft{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new ft("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ft&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tn(n){return n==null}function as(n){return n===0&&1/n==-1/0}function xf(n){return typeof n=="number"&&Number.isInteger(n)&&!as(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(x.fromString(e))}static fromName(e){return new I(x.fromString(e).popFirst(5))}static empty(){return new I(x.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&x.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return x.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new x(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},dl={nullValue:"NULL_VALUE"};function hn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Sc(n)?4:Of(n)?9:10:b()}function it(n,e){if(n===e)return!0;const t=hn(n);if(t!==hn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return os(n).isEqual(os(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Pt(r.timestampValue),o=Pt(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return ln(r.bytesValue).isEqual(ln(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return W(r.geoPointValue.latitude)===W(s.geoPointValue.latitude)&&W(r.geoPointValue.longitude)===W(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return W(r.integerValue)===W(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=W(r.doubleValue),o=W(s.doubleValue);return i===o?as(i)===as(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return Zn(n.arrayValue.values||[],e.arrayValue.values||[],it);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(ll(i)!==ll(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!it(i[a],o[a])))return!1;return!0}(n,e);default:return b()}}function cs(n,e){return(n.values||[]).find(t=>it(t,e))!==void 0}function xt(n,e){if(n===e)return 0;const t=hn(n),r=hn(e);if(t!==r)return R(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return R(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=W(s.integerValue||s.doubleValue),a=W(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return fl(n.timestampValue,e.timestampValue);case 4:return fl(os(n),os(e));case 5:return R(n.stringValue,e.stringValue);case 6:return function(s,i){const o=ln(s),a=ln(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=R(o[c],a[c]);if(u!==0)return u}return R(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=R(W(s.latitude),W(i.latitude));return o!==0?o:R(W(s.longitude),W(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=xt(o[c],a[c]);if(u)return u}return R(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=R(a[l],u[l]);if(h!==0)return h;const d=xt(o[a[l]],c[u[l]]);if(d!==0)return d}return R(a.length,u.length)}(n.mapValue,e.mapValue);default:throw b()}}function fl(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return R(n,e);const t=Pt(n),r=Pt(e),s=R(t.seconds,r.seconds);return s!==0?s:R(t.nanos,r.nanos)}function zn(n){return va(n)}function va(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=Pt(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ln(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,I.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=va(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${va(r.fields[a])}`;return i+"}"}(n.mapValue):b();var e,t}function tr(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function wa(n){return!!n&&"integerValue"in n}function us(n){return!!n&&"arrayValue"in n}function pl(n){return!!n&&"nullValue"in n}function ml(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ci(n){return!!n&&"mapValue"in n}function qr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return bn(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=qr(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qr(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Of(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function gl(n,e){return n===void 0?e:e===void 0||xt(n,e)>0?n:e}function yl(n,e){return n===void 0?e:e===void 0||xt(n,e)<0?n:e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.value=e}static empty(){return new Te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!ci(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qr(t)}setAll(e){let t=ae.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=qr(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());ci(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return it(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];ci(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){bn(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Te(qr(this.value))}}function Lf(n){const e=[];return bn(n.fields,(t,r)=>{const s=new ae([t]);if(ci(r)){const i=Lf(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new er(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,r,s,i,o){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new V(e,0,A.min(),A.min(),Te.empty(),0)}static newFoundDocument(e,t,r){return new V(e,1,t,A.min(),r,0)}static newNoDocument(e,t){return new V(e,2,t,A.min(),Te.empty(),0)}static newUnknownDocument(e,t){return new V(e,3,t,A.min(),Te.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof V&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new V(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}class Mf{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Ia(n){return n.fields.find(e=>e.kind===2)}function Fn(n){return n.fields.filter(e=>e.kind!==2)}Mf.UNKNOWN_ID=-1;class lE{constructor(e,t){this.fieldPath=e,this.kind=t}}class Ri{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ri(0,pt.min())}}function Ff(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=A.fromTimestamp(r===1e9?new J(t+1,0):new J(t,r));return new pt(s,I.empty(),e)}function hE(n){return new pt(n.readTime,n.key,-1)}class pt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new pt(A.min(),I.empty(),-1)}static max(){return new pt(A.max(),I.empty(),-1)}}function dE(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=I.comparator(n.documentKey,e.documentKey),t!==0?t:R(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fE{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.P=null}}function vl(n,e=null,t=[],r=[],s=null,i=null,o=null){return new fE(n,e,t,r,s,i,o)}function dn(n){const e=_(n);if(e.P===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>{return(s=r).field.canonicalString()+s.op.toString()+zn(s.value);var s}).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Tn(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>zn(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>zn(r)).join(",")),e.P=t}return e.P}function pE(n){let e=n.path.canonicalString();return n.collectionGroup!==null&&(e+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(e+=`, filters: [${n.filters.map(t=>{return`${(r=t).field.canonicalString()} ${r.op} ${zn(r.value)}`;var r}).join(", ")}]`),Tn(n.limit)||(e+=", limit: "+n.limit),n.orderBy.length>0&&(e+=`, orderBy: [${n.orderBy.map(t=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(t)).join(", ")}]`),n.startAt&&(e+=", startAt: ",e+=n.startAt.inclusive?"b:":"a:",e+=n.startAt.position.map(t=>zn(t)).join(",")),n.endAt&&(e+=", endAt: ",e+=n.endAt.inclusive?"a:":"b:",e+=n.endAt.position.map(t=>zn(t)).join(",")),`Target(${e})`}function Ds(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let s=0;s<n.orderBy.length;s++)if(!EE(n.orderBy[s],e.orderBy[s]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let s=0;s<n.filters.length;s++)if(t=n.filters[s],r=e.filters[s],t.op!==r.op||!t.field.isEqual(r.field)||!it(t.value,r.value))return!1;var t,r;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Il(n.startAt,e.startAt)&&Il(n.endAt,e.endAt)}function Pi(n){return I.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Hs(n,e){return n.filters.filter(t=>t instanceof ve&&t.field.isEqual(e))}class ve extends class{}{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.V(e,t,r):new mE(e,t,r):t==="array-contains"?new vE(e,r):t==="in"?new wE(e,r):t==="not-in"?new IE(e,r):t==="array-contains-any"?new _E(e,r):new ve(e,t,r)}static V(e,t,r){return t==="in"?new gE(e,r):new yE(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.v(xt(t,this.value)):t!==null&&hn(this.value)===hn(t)&&this.v(xt(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return b()}}S(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class mE extends ve{constructor(e,t,r){super(e,t,r),this.key=I.fromName(r.referenceValue)}matches(e){const t=I.comparator(e.key,this.key);return this.v(t)}}class gE extends ve{constructor(e,t){super(e,"in",t),this.keys=Uf("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class yE extends ve{constructor(e,t){super(e,"not-in",t),this.keys=Uf("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Uf(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>I.fromName(r.referenceValue))}class vE extends ve{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return us(t)&&cs(t.arrayValue,this.value)}}class wE extends ve{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&cs(this.value.arrayValue,t)}}class IE extends ve{constructor(e,t){super(e,"not-in",t)}matches(e){if(cs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!cs(this.value.arrayValue,t)}}class _E extends ve{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!us(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>cs(this.value.arrayValue,r))}}class Ot{constructor(e,t){this.position=e,this.inclusive=t}}class Hn{constructor(e,t="asc"){this.field=e,this.dir=t}}function EE(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}function wl(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=I.comparator(I.fromName(o.referenceValue),t.key):r=xt(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Il(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!it(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.D=null,this.C=null,this.startAt,this.endAt}}function Vf(n,e,t,r,s,i,o,a){return new vt(n,e,t,r,s,i,o,a)}function Ir(n){return new vt(n)}function ui(n){return!Tn(n.limit)&&n.limitType==="F"}function xi(n){return!Tn(n.limit)&&n.limitType==="L"}function Ac(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function kc(n){for(const e of n.filters)if(e.S())return e.field;return null}function Nc(n){return n.collectionGroup!==null}function nr(n){const e=_(n);if(e.D===null){e.D=[];const t=kc(e),r=Ac(e);if(t!==null&&r===null)t.isKeyField()||e.D.push(new Hn(t)),e.D.push(new Hn(ae.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.D.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.D.push(new Hn(ae.keyField(),i))}}}return e.D}function je(n){const e=_(n);if(!e.C)if(e.limitType==="F")e.C=vl(e.path,e.collectionGroup,nr(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of nr(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new Hn(i.field,o))}const r=e.endAt?new Ot(e.endAt.position,!e.endAt.inclusive):null,s=e.startAt?new Ot(e.startAt.position,!e.startAt.inclusive):null;e.C=vl(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.C}function qf(n,e,t){return new vt(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Rs(n,e){return Ds(je(n),je(e))&&n.limitType===e.limitType}function Bf(n){return`${dn(je(n))}|lt:${n.limitType}`}function _a(n){return`Query(target=${pE(je(n))}; limitType=${n.limitType})`}function Cc(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):I.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of t.explicitOrderBy)if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=wl(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,nr(t),r)||t.endAt&&!function(s,i,o){const a=wl(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,nr(t),r))}(n,e)}function $f(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jf(n){return(e,t)=>{let r=!1;for(const s of nr(n)){const i=bE(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bE(n,e,t){const r=n.field.isKeyField()?I.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?xt(a,c):b()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return b()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(n,e){if(n.N){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:as(e)?"-0":e}}function Kf(n){return{integerValue:""+n}}function Wf(n,e){return xf(e)?Kf(e):Gf(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(){this._=void 0}}function TE(n,e,t){return n instanceof rr?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof fn?Hf(n,e):n instanceof pn?Yf(n,e):function(r,s){const i=zf(r,s),o=_l(i)+_l(r.k);return wa(i)&&wa(r.k)?Kf(o):Gf(r.M,o)}(n,e)}function SE(n,e,t){return n instanceof fn?Hf(n,e):n instanceof pn?Yf(n,e):t}function zf(n,e){return n instanceof sr?wa(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class rr extends yo{}class fn extends yo{constructor(e){super(),this.elements=e}}function Hf(n,e){const t=Jf(e);for(const r of n.elements)t.some(s=>it(s,r))||t.push(r);return{arrayValue:{values:t}}}class pn extends yo{constructor(e){super(),this.elements=e}}function Yf(n,e){let t=Jf(e);for(const r of n.elements)t=t.filter(s=>!it(s,r));return{arrayValue:{values:t}}}class sr extends yo{constructor(e,t){super(),this.M=e,this.k=t}}function _l(n){return W(n.integerValue||n.doubleValue)}function Jf(n){return us(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,t){this.field=e,this.transform=t}}function AE(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof fn&&r instanceof fn||t instanceof pn&&r instanceof pn?Zn(t.elements,r.elements,it):t instanceof sr&&r instanceof sr?it(t.k,r.k):t instanceof rr&&r instanceof rr}(n.transform,e.transform)}class kE{constructor(e,t){this.version=e,this.transformResults=t}}class ee{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ee}static exists(e){return new ee(void 0,e)}static updateTime(e){return new ee(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function li(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class vo{}function NE(n,e,t){n instanceof xs?function(r,s,i){const o=r.value.clone(),a=Tl(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Sn?function(r,s,i){if(!li(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Tl(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(Qf(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Ea(n,e,t){n instanceof xs?function(r,s,i){if(!li(r.precondition,s))return;const o=r.value.clone(),a=Sl(r.fieldTransforms,i,s);o.setAll(a),s.convertToFoundDocument(bl(s),o).setHasLocalMutations()}(n,e,t):n instanceof Sn?function(r,s,i){if(!li(r.precondition,s))return;const o=Sl(r.fieldTransforms,i,s),a=s.data;a.setAll(Qf(r)),a.setAll(o),s.convertToFoundDocument(bl(s),a).setHasLocalMutations()}(n,e,t):function(r,s){li(r.precondition,s)&&s.convertToNoDocument(A.min())}(n,e)}function CE(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=zf(r.transform,s||null);i!=null&&(t==null&&(t=Te.empty()),t.set(r.field,i))}return t||null}function El(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&Zn(t,r,(s,i)=>AE(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}function bl(n){return n.isFoundDocument()?n.version:A.min()}class xs extends vo{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}}class Sn extends vo{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}}function Qf(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Tl(n,e,t){const r=new Map;k(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,SE(o,a,t[s]))}return r}function Sl(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,TE(i,o,e))}return r}class Os extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Dc extends vo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X,P;function Xf(n){switch(n){default:return b();case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1;case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0}}function Zf(n){if(n===void 0)return Z("GRPC error has no .code"),f.UNKNOWN;switch(n){case X.OK:return f.OK;case X.CANCELLED:return f.CANCELLED;case X.UNKNOWN:return f.UNKNOWN;case X.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED;case X.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED;case X.INTERNAL:return f.INTERNAL;case X.UNAVAILABLE:return f.UNAVAILABLE;case X.UNAUTHENTICATED:return f.UNAUTHENTICATED;case X.INVALID_ARGUMENT:return f.INVALID_ARGUMENT;case X.NOT_FOUND:return f.NOT_FOUND;case X.ALREADY_EXISTS:return f.ALREADY_EXISTS;case X.PERMISSION_DENIED:return f.PERMISSION_DENIED;case X.FAILED_PRECONDITION:return f.FAILED_PRECONDITION;case X.ABORTED:return f.ABORTED;case X.OUT_OF_RANGE:return f.OUT_OF_RANGE;case X.UNIMPLEMENTED:return f.UNIMPLEMENTED;case X.DATA_LOSS:return f.DATA_LOSS;default:return b()}}(P=X||(X={}))[P.OK=0]="OK",P[P.CANCELLED=1]="CANCELLED",P[P.UNKNOWN=2]="UNKNOWN",P[P.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",P[P.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",P[P.NOT_FOUND=5]="NOT_FOUND",P[P.ALREADY_EXISTS=6]="ALREADY_EXISTS",P[P.PERMISSION_DENIED=7]="PERMISSION_DENIED",P[P.UNAUTHENTICATED=16]="UNAUTHENTICATED",P[P.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",P[P.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",P[P.ABORTED=10]="ABORTED",P[P.OUT_OF_RANGE=11]="OUT_OF_RANGE",P[P.UNIMPLEMENTED=12]="UNIMPLEMENTED",P[P.INTERNAL=13]="INTERNAL",P[P.UNAVAILABLE=14]="UNAVAILABLE",P[P.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){bn(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Rf(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.comparator=e,this.root=t||ye.EMPTY}insert(e,t){return new Q(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ye.BLACK,null,null))}remove(e){return new Q(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ye.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ys(this.root,e,this.comparator,!0)}}class Ys{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ye{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ye.RED,this.left=s??ye.EMPTY,this.right=i??ye.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ye(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ye.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ye.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ye.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ye.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw b();const e=this.left.check();if(e!==this.right.check())throw b();return e+(this.isRed()?0:1)}}ye.EMPTY=null,ye.RED=!0,ye.BLACK=!1;ye.EMPTY=new class{constructor(){this.size=0}get key(){throw b()}get value(){throw b()}get color(){throw b()}get left(){throw b()}get right(){throw b()}copy(n,e,t,r,s){return this}insert(n,e,t){return new ye(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(e){this.comparator=e,this.data=new Q(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Al(this.data.getIterator())}getIteratorFrom(e){return new Al(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof q)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new q(this.comparator);return t.data=e,t}}class Al{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function On(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RE=new Q(I.comparator);function qe(){return RE}const PE=new Q(I.comparator);function ba(){return PE}function Br(){return new Bt(n=>n.toString(),(n,e)=>n.isEqual(e))}const xE=new Q(I.comparator),OE=new q(I.comparator);function F(...n){let e=OE;for(const t of n)e=e.add(t);return e}const LE=new q(R);function wo(){return LE}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const r=new Map;return r.set(e,Ms.createSynthesizedTargetChangeForCurrentChange(e,t)),new Ls(A.min(),r,wo(),qe(),F())}}class Ms{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Ms(se.EMPTY_BYTE_STRING,t,F(),F(),F())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e,t,r,s){this.O=e,this.removedTargetIds=t,this.key=r,this.F=s}}class ep{constructor(e,t){this.targetId=e,this.$=t}}class tp{constructor(e,t,r=se.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class kl{constructor(){this.B=0,this.L=Cl(),this.U=se.EMPTY_BYTE_STRING,this.q=!1,this.G=!0}get current(){return this.q}get resumeToken(){return this.U}get K(){return this.B!==0}get j(){return this.G}W(e){e.approximateByteSize()>0&&(this.G=!0,this.U=e)}H(){let e=F(),t=F(),r=F();return this.L.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:b()}}),new Ms(this.U,this.q,e,t,r)}J(){this.G=!1,this.L=Cl()}Y(e,t){this.G=!0,this.L=this.L.insert(e,t)}X(e){this.G=!0,this.L=this.L.remove(e)}Z(){this.B+=1}tt(){this.B-=1}et(){this.G=!0,this.q=!0}}class ME{constructor(e){this.nt=e,this.st=new Map,this.it=qe(),this.rt=Nl(),this.ot=new q(R)}ut(e){for(const t of e.O)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ht(e){this.forEachTarget(e,t=>{const r=this.lt(t);switch(e.state){case 0:this.ft(t)&&r.W(e.resumeToken);break;case 1:r.tt(),r.K||r.J(),r.W(e.resumeToken);break;case 2:r.tt(),r.K||this.removeTarget(t);break;case 3:this.ft(t)&&(r.et(),r.W(e.resumeToken));break;case 4:this.ft(t)&&(this.dt(t),r.W(e.resumeToken));break;default:b()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.st.forEach((r,s)=>{this.ft(s)&&t(s)})}_t(e){const t=e.targetId,r=e.$.count,s=this.wt(t);if(s){const i=s.target;if(Pi(i))if(r===0){const o=new I(i.path);this.ct(t,o,V.newNoDocument(o,A.min()))}else k(r===1);else this.gt(t)!==r&&(this.dt(t),this.ot=this.ot.add(t))}}yt(e){const t=new Map;this.st.forEach((i,o)=>{const a=this.wt(o);if(a){if(i.current&&Pi(a.target)){const c=new I(a.target.path);this.it.get(c)!==null||this.It(o,c)||this.ct(o,c,V.newNoDocument(c,e))}i.j&&(t.set(o,i.H()),i.J())}});let r=F();this.rt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.wt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.it.forEach((i,o)=>o.setReadTime(e));const s=new Ls(e,t,this.ot,this.it,r);return this.it=qe(),this.rt=Nl(),this.ot=new q(R),s}at(e,t){if(!this.ft(e))return;const r=this.It(e,t.key)?2:0;this.lt(e).Y(t.key,r),this.it=this.it.insert(t.key,t),this.rt=this.rt.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,r){if(!this.ft(e))return;const s=this.lt(e);this.It(e,t)?s.Y(t,1):s.X(t),this.rt=this.rt.insert(t,this.Tt(t).delete(e)),r&&(this.it=this.it.insert(t,r))}removeTarget(e){this.st.delete(e)}gt(e){const t=this.lt(e).H();return this.nt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Z(e){this.lt(e).Z()}lt(e){let t=this.st.get(e);return t||(t=new kl,this.st.set(e,t)),t}Tt(e){let t=this.rt.get(e);return t||(t=new q(R),this.rt=this.rt.insert(e,t)),t}ft(e){const t=this.wt(e)!==null;return t||v("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.st.get(e);return t&&t.K?null:this.nt.Et(e)}dt(e){this.st.set(e,new kl),this.nt.getRemoteKeysForTarget(e).forEach(t=>{this.ct(e,t,null)})}It(e,t){return this.nt.getRemoteKeysForTarget(e).has(t)}}function Nl(){return new Q(I.comparator)}function Cl(){return new Q(I.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE={asc:"ASCENDING",desc:"DESCENDING"},UE={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class VE{constructor(e,t){this.databaseId=e,this.N=t}}function ls(n,e){return n.N?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function np(n,e){return n.N?e.toBase64():e.toUint8Array()}function qE(n,e){return ls(n,e.toTimestamp())}function le(n){return k(!!n),A.fromTimestamp(function(e){const t=Pt(e);return new J(t.seconds,t.nanos)}(n))}function Rc(n,e){return function(t){return new x(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function rp(n){const e=x.fromString(n);return k(hp(e)),e}function hs(n,e){return Rc(n.databaseId,e.path)}function tt(n,e){const t=rp(e);if(t.get(1)!==n.databaseId.projectId)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new y(f.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new I(ip(t))}function Ta(n,e){return Rc(n.databaseId,e)}function sp(n){const e=rp(n);return e.length===4?x.emptyPath():ip(e)}function ds(n){return new x(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function ip(n){return k(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Dl(n,e,t){return{name:hs(n,e),fields:t.value.mapValue.fields}}function op(n,e,t){const r=tt(n,e.name),s=le(e.updateTime),i=new Te({mapValue:{fields:e.fields}}),o=V.newFoundDocument(r,s,i);return t&&o.setHasCommittedMutations(),t?o.setHasCommittedMutations():o}function BE(n,e){return"found"in e?function(t,r){k(!!r.found),r.found.name,r.found.updateTime;const s=tt(t,r.found.name),i=le(r.found.updateTime),o=new Te({mapValue:{fields:r.found.fields}});return V.newFoundDocument(s,i,o)}(n,e):"missing"in e?function(t,r){k(!!r.missing),k(!!r.readTime);const s=tt(t,r.missing),i=le(r.readTime);return V.newNoDocument(s,i)}(n,e):b()}function $E(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:b()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.N?(k(u===void 0||typeof u=="string"),se.fromBase64String(u||"")):(k(u===void 0||u instanceof Uint8Array),se.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?f.UNKNOWN:Zf(c.code);return new y(u,c.message||"")}(o);t=new tp(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=tt(n,r.document.name),i=le(r.document.updateTime),o=new Te({mapValue:{fields:r.document.fields}}),a=V.newFoundDocument(s,i,o),c=r.targetIds||[],u=r.removedTargetIds||[];t=new hi(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=tt(n,r.document),i=r.readTime?le(r.readTime):A.min(),o=V.newNoDocument(s,i),a=r.removedTargetIds||[];t=new hi([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=tt(n,r.document),i=r.removedTargetIds||[];t=new hi([],i,s,null)}else{if(!("filter"in e))return b();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new DE(s),o=r.targetId;t=new ep(o,i)}}return t}function fs(n,e){let t;if(e instanceof xs)t={update:Dl(n,e.key,e.value)};else if(e instanceof Os)t={delete:hs(n,e.key)};else if(e instanceof Sn)t={update:Dl(n,e.key,e.data),updateMask:YE(e.fieldMask)};else{if(!(e instanceof Dc))return b();t={verify:hs(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof rr)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof fn)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof pn)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof sr)return{fieldPath:i.field.canonicalString(),increment:o.k};throw b()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:qE(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:b()}(n,e.precondition)),t}function Sa(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?ee.updateTime(le(s.updateTime)):s.exists!==void 0?ee.exists(s.exists):ee.none()}(e.currentDocument):ee.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)k(o.setToServerValue==="REQUEST_TIME"),a=new rr;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new fn(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new pn(u)}else"increment"in o?a=new sr(i,o.increment):b();const c=ae.fromServerFormat(o.fieldPath);return new Ps(c,a)}(n,s)):[];if(e.update){e.update.name;const s=tt(n,e.update.name),i=new Te({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new er(c.map(u=>ae.fromServerFormat(u)))}(e.updateMask);return new Sn(s,i,o,t,r)}return new xs(s,i,t,r)}if(e.delete){const s=tt(n,e.delete);return new Os(s,t)}if(e.verify){const s=tt(n,e.verify);return new Dc(s,t)}return b()}function jE(n,e){return n&&n.length>0?(k(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?le(r.updateTime):le(s);return i.isEqual(A.min())&&(i=le(s)),new kE(i,r.transformResults||[])}(t,e))):[]}function ap(n,e){return{documents:[Ta(n,e.path)]}}function cp(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Ta(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Ta(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length===0)return;const u=c.map(l=>function(h){if(h.op==="=="){if(ml(h.value))return{unaryFilter:{field:Ln(h.field),op:"IS_NAN"}};if(pl(h.value))return{unaryFilter:{field:Ln(h.field),op:"IS_NULL"}}}else if(h.op==="!="){if(ml(h.value))return{unaryFilter:{field:Ln(h.field),op:"IS_NOT_NAN"}};if(pl(h.value))return{unaryFilter:{field:Ln(h.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ln(h.field),op:WE(h.op),value:h.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ln(l.field),direction:KE(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.N||Tn(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function up(n){let e=sp(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){k(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=lp(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new Hn($n(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Tn(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ot(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ot(d,h)}(t.endAt)),Vf(e,s,o,i,a,"F",c,u)}function GE(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return b()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function lp(n){return n?n.unaryFilter!==void 0?[HE(n)]:n.fieldFilter!==void 0?[zE(n)]:n.compositeFilter!==void 0?n.compositeFilter.filters.map(e=>lp(e)).reduce((e,t)=>e.concat(t)):b():[]}function KE(n){return FE[n]}function WE(n){return UE[n]}function Ln(n){return{fieldPath:n.canonicalString()}}function $n(n){return ae.fromServerFormat(n.fieldPath)}function zE(n){return ve.create($n(n.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return b()}}(n.fieldFilter.op),n.fieldFilter.value)}function HE(n){switch(n.unaryFilter.op){case"IS_NAN":const e=$n(n.unaryFilter.field);return ve.create(e,"==",{doubleValue:NaN});case"IS_NULL":const t=$n(n.unaryFilter.field);return ve.create(t,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=$n(n.unaryFilter.field);return ve.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=$n(n.unaryFilter.field);return ve.create(s,"!=",{nullValue:"NULL_VALUE"});default:return b()}}function YE(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Rl(e)),e=JE(n.get(t),e);return Rl(e)}function JE(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Rl(n){return n+""}function We(n){const e=n.length;if(k(e>=2),e===2)return k(n.charAt(0)===""&&n.charAt(1)===""),x.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&b(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:b()}i=o+2}return new x(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function di(n,e){return[n,ce(e)]}function dp(n,e,t){return[n,ce(e),t]}const QE={},XE=["prefixPath","collectionGroup","readTime","documentId"],ZE=["prefixPath","collectionGroup","documentId"],eb=["collectionGroup","readTime","prefixPath","documentId"],tb=["canonicalId","targetId"],nb=["targetId","path"],rb=["path","targetId"],sb=["collectionId","parent"],ib=["indexId","uid"],ob=["uid","sequenceNumber"],ab=["indexId","uid","arrayValue","directionalValue","documentKey"],cb=["indexId","uid","documentKey"],ub=["userId","collectionPath","documentId"],lb=["userId","collectionPath","largestBatchId"],hb=["userId","collectionGroup","largestBatchId"],fp=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],db=[...fp,"documentOverlays"],pp=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],fb=[...pp,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mp="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class gp{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&b(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new p((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof p?t:p.resolve(t)}catch(t){return p.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):p.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):p.reject(t)}static resolve(e){return new p((t,r)=>{t(e)})}static reject(e){return new p((t,r)=>{r(e)})}static waitFor(e){return new p((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=p.resolve(!1);for(const r of e)t=t.next(s=>s?p.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.At=new ue,this.transaction.oncomplete=()=>{this.At.resolve()},this.transaction.onabort=()=>{t.error?this.At.reject(new $r(e,t.error)):this.At.resolve()},this.transaction.onerror=r=>{const s=Pc(r.target.error);this.At.reject(new $r(e,s))}}static open(e,t,r,s){try{return new Io(t,e.transaction(s,r))}catch(i){throw new $r(t,i)}}get Rt(){return this.At.promise}abort(e){e&&this.At.reject(e),this.aborted||(v("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}bt(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new mb(t)}}class ze{constructor(e,t,r){this.name=e,this.version=t,this.Pt=r,ze.Vt($())===12.2&&Z("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return v("SimpleDb","Removing database:",e),Wt(window.indexedDB.deleteDatabase(e)).toPromise()}static vt(){if(!Kr())return!1;if(ze.St())return!0;const e=$(),t=ze.Vt(e),r=0<t&&t<10,s=ze.Dt(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static St(){var e;return typeof process<"u"&&((e=Y_)===null||e===void 0?void 0:e.Ct)==="YES"}static xt(e,t){return e.store(t)}static Vt(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Dt(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Nt(e){return this.db||(v("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new $r(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new y(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new y(f.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new $r(e,o))},s.onupgradeneeded=i=>{v("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.Pt.kt(o,s.transaction,i.oldVersion,this.version).next(()=>{v("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.Mt&&(this.db.onversionchange=t=>this.Mt(t)),this.db}Ot(e){this.Mt=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.Nt(e);const a=Io.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.bt(),u)).catch(u=>(a.abort(u),p.reject(u))).toPromise();return c.catch(()=>{}),await a.Rt,c}catch(a){const c=a.name!=="FirebaseError"&&o<3;if(v("SimpleDb","Transaction failed with error:",a.message,"Retrying:",c),this.close(),!c)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class pb{constructor(e){this.Ft=e,this.$t=!1,this.Bt=null}get isDone(){return this.$t}get Lt(){return this.Bt}set cursor(e){this.Ft=e}done(){this.$t=!0}Ut(e){this.Bt=e}delete(){return Wt(this.Ft.delete())}}class $r extends y{constructor(e,t){super(f.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function An(n){return n.name==="IndexedDbTransactionError"}class mb{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(v("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Wt(r)}add(e){return v("SimpleDb","ADD",this.store.name,e,e),Wt(this.store.add(e))}get(e){return Wt(this.store.get(e)).next(t=>(t===void 0&&(t=null),v("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return v("SimpleDb","DELETE",this.store.name,e),Wt(this.store.delete(e))}count(){return v("SimpleDb","COUNT",this.store.name),Wt(this.store.count())}qt(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.Gt(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new p((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}Kt(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new p((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}Qt(e,t){v("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.jt=!1;const s=this.cursor(r);return this.Gt(s,(i,o,a)=>a.delete())}Wt(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.Gt(s,t)}zt(e){const t=this.cursor({});return new p((r,s)=>{t.onerror=i=>{const o=Pc(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Gt(e,t){const r=[];return new p((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new pb(a),u=t(a.primaryKey,a.value,c);if(u instanceof p){const l=u.catch(h=>(c.done(),p.reject(h)));r.push(l)}c.isDone?s():c.Lt===null?a.continue():a.continue(c.Lt)}}).next(()=>p.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.jt?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Wt(n){return new p((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Pc(r.target.error);t(s)}})}let xl=!1;function Pc(n){const e=ze.Vt($());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new y("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return xl||(xl=!0,setTimeout(()=>{throw r},0)),r}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends gp{constructor(e,t){super(),this.Ht=e,this.currentSequenceNumber=t}}function pe(n,e){const t=_(n);return ze.xt(t.Ht,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&NE(i,e,r[s])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&Ea(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&Ea(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(t=>{const r=e.get(t.key),s=r;this.applyToLocalView(s),r.isValidDocument()||s.convertToNoDocument(A.min())})}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),F())}isEqual(e){return this.batchId===e.batchId&&Zn(this.mutations,e.mutations,(t,r)=>El(t,r))&&Zn(this.baseMutations,e.baseMutations,(t,r)=>El(t,r))}}class Oc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){k(e.mutations.length===r.length);let s=xE;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Oc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(e,t,r,s,i=A.min(),o=A.min(),a=se.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new kt(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new kt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.Jt=e}}function gb(n,e){let t;if(e.document)t=op(n.Jt,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=I.fromSegments(e.noDocument.path),s=gn(e.noDocument.readTime);t=V.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return b();{const r=I.fromSegments(e.unknownDocument.path),s=gn(e.unknownDocument.version);t=V.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(r){const s=new J(r[0],r[1]);return A.fromTimestamp(s)}(e.readTime)),t}function Ll(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Oi(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:hs(s,i.key),fields:i.data.value.mapValue.fields,updateTime:ls(s,i.version.toTimestamp())}}(n.Jt,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:mn(e.version)};else{if(!e.isUnknownDocument())return b();r.unknownDocument={path:t.path.toArray(),version:mn(e.version)}}return r}function Oi(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function mn(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function gn(n){const e=new J(n.seconds,n.nanoseconds);return A.fromTimestamp(e)}function Un(n,e){const t=(e.baseMutations||[]).map(i=>Sa(n.Jt,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Sa(n.Jt,i)),s=J.fromMillis(e.localWriteTimeMs);return new xc(e.batchId,s,t,r)}function Mr(n){const e=gn(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?gn(n.lastLimboFreeSnapshotVersion):A.min();let r;var s;return n.query.documents!==void 0?(k((s=n.query).documents.length===1),r=je(Ir(sp(s.documents[0])))):r=function(i){return je(up(i))}(n.query),new kt(r,n.targetId,0,n.lastListenSequenceNumber,e,t,se.fromBase64String(n.resumeToken))}function vp(n,e){const t=mn(e.snapshotVersion),r=mn(e.lastLimboFreeSnapshotVersion);let s;s=Pi(e.target)?ap(n.Jt,e.target):cp(n.Jt,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:dn(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Mc(n){const e=up({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?qf(e,e.limit,"L"):e}function Wo(n,e){return new Lc(e.largestBatchId,Sa(n.Jt,e.overlayMutation))}function Ml(n,e){const t=e.path.lastSegment();return[n,ce(e.path.popLast()),t]}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{getBundleMetadata(e,t){return Fl(e).get(t).next(r=>{if(r)return{id:(s=r).bundleId,createTime:gn(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return Fl(e).put({bundleId:(r=t).id,createTime:mn(le(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return Ul(e).get(t).next(r=>{if(r)return{name:(s=r).name,query:Mc(s.bundledQuery),readTime:gn(s.readTime)};var s})}saveNamedQuery(e,t){return Ul(e).put(function(r){return{name:r.name,readTime:mn(le(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function Fl(n){return pe(n,"bundles")}function Ul(n){return pe(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t){this.M=e,this.userId=t}static Yt(e,t){const r=t.uid||"";return new Fc(e,r)}getOverlay(e,t){return Cr(e).get(Ml(this.userId,t)).next(r=>r?Wo(this.M,r):null)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new Lc(t,o);s.push(this.Xt(e,a))}),p.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(ce(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Cr(e).Qt("collectionPathOverlayIndex",a))}),p.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Br(),i=ce(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Cr(e).qt("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Wo(this.M,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Br();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Cr(e).Wt({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Wo(this.M,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}Xt(e,t){return Cr(e).put(function(r,s,i){const[o,a,c]=Ml(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:fs(r.Jt,i.mutation)}}(this.M,this.userId,t))}}function Cr(n){return pe(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(){}Zt(e,t){this.te(e,t),t.ee()}te(e,t){if("nullValue"in e)this.ne(t,5);else if("booleanValue"in e)this.ne(t,10),t.se(e.booleanValue?1:0);else if("integerValue"in e)this.ne(t,15),t.se(W(e.integerValue));else if("doubleValue"in e){const r=W(e.doubleValue);isNaN(r)?this.ne(t,13):(this.ne(t,15),as(r)?t.se(0):t.se(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ne(t,20),typeof r=="string"?t.ie(r):(t.ie(`${r.seconds||""}`),t.se(r.nanos||0))}else if("stringValue"in e)this.re(e.stringValue,t),this.oe(t);else if("bytesValue"in e)this.ne(t,30),t.ue(ln(e.bytesValue)),this.oe(t);else if("referenceValue"in e)this.ae(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ne(t,45),t.se(r.latitude||0),t.se(r.longitude||0)}else"mapValue"in e?Of(e)?this.ne(t,Number.MAX_SAFE_INTEGER):(this.ce(e.mapValue,t),this.oe(t)):"arrayValue"in e?(this.he(e.arrayValue,t),this.oe(t)):b()}re(e,t){this.ne(t,25),this.le(e,t)}le(e,t){t.ie(e)}ce(e,t){const r=e.fields||{};this.ne(t,55);for(const s of Object.keys(r))this.re(s,t),this.te(r[s],t)}he(e,t){const r=e.values||[];this.ne(t,50);for(const s of r)this.te(s,t)}ae(e,t){this.ne(t,37),I.fromName(e).path.forEach(r=>{this.ne(t,60),this.le(r,t)})}ne(e,t){e.se(t)}oe(e){e.se(2)}}jn.fe=new jn;function vb(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Vl(n){const e=64-function(t){let r=0;for(let s=0;s<8;++s){const i=vb(255&t[s]);if(r+=i,i!==8)break}return r}(n);return Math.ceil(e/8)}class wb{constructor(){this.buffer=new Uint8Array(1024),this.position=0}de(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this._e(r.value),r=t.next();this.we()}me(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.ge(r.value),r=t.next();this.ye()}pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this._e(r);else if(r<2048)this._e(960|r>>>6),this._e(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this._e(480|r>>>12),this._e(128|63&r>>>6),this._e(128|63&r);else{const s=t.codePointAt(0);this._e(240|s>>>18),this._e(128|63&s>>>12),this._e(128|63&s>>>6),this._e(128|63&s)}}this.we()}Ie(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.ge(r);else if(r<2048)this.ge(960|r>>>6),this.ge(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.ge(480|r>>>12),this.ge(128|63&r>>>6),this.ge(128|63&r);else{const s=t.codePointAt(0);this.ge(240|s>>>18),this.ge(128|63&s>>>12),this.ge(128|63&s>>>6),this.ge(128|63&s)}}this.ye()}Te(e){const t=this.Ee(e),r=Vl(t);this.Ae(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Re(e){const t=this.Ee(e),r=Vl(t);this.Ae(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}be(){this.Pe(255),this.Pe(255)}Ve(){this.ve(255),this.ve(255)}reset(){this.position=0}seed(e){this.Ae(e.length),this.buffer.set(e,this.position),this.position+=e.length}Se(){return this.buffer.slice(0,this.position)}Ee(e){const t=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}_e(e){const t=255&e;t===0?(this.Pe(0),this.Pe(255)):t===255?(this.Pe(255),this.Pe(0)):this.Pe(t)}ge(e){const t=255&e;t===0?(this.ve(0),this.ve(255)):t===255?(this.ve(255),this.ve(0)):this.ve(e)}we(){this.Pe(0),this.Pe(1)}ye(){this.ve(0),this.ve(1)}Pe(e){this.Ae(1),this.buffer[this.position++]=e}ve(e){this.Ae(1),this.buffer[this.position++]=~e}Ae(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class Ib{constructor(e){this.De=e}ue(e){this.De.de(e)}ie(e){this.De.pe(e)}se(e){this.De.Te(e)}ee(){this.De.be()}}class _b{constructor(e){this.De=e}ue(e){this.De.me(e)}ie(e){this.De.Ie(e)}se(e){this.De.Re(e)}ee(){this.De.Ve()}}class Js{constructor(){this.De=new wb,this.Ce=new Ib(this.De),this.xe=new _b(this.De)}seed(e){this.De.seed(e)}Ne(e){return e===0?this.Ce:this.xe}Se(){return this.De.Se()}reset(){this.De.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}ke(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new bt(this.indexId,this.documentKey,this.arrayValue,r)}}function jt(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=ql(n.arrayValue,e.arrayValue),t!==0?t:(t=ql(n.directionalValue,e.directionalValue),t!==0?t:I.comparator(n.documentKey,e.documentKey)))}function ql(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eb{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Me=e.orderBy,this.Oe=[];for(const t of e.filters){const r=t;r.S()?this.Fe=r:this.Oe.push(r)}}$e(e){const t=Ia(e);if(t!==void 0&&!this.Be(t))return!1;const r=Fn(e);let s=0,i=0;for(;s<r.length&&this.Be(r[s]);++s);if(s===r.length)return!0;if(this.Fe!==void 0){const o=r[s];if(!this.Le(this.Fe,o)||!this.Ue(this.Me[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Me.length||!this.Ue(this.Me[i++],o))return!1}return!0}Be(e){for(const t of this.Oe)if(this.Le(t,e))return!0;return!1}Le(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}Ue(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bb{constructor(){this.qe=new Uc}addToCollectionParentIndex(e,t){return this.qe.add(t),p.resolve()}getCollectionParents(e,t){return p.resolve(this.qe.getEntries(t))}addFieldIndex(e,t){return p.resolve()}deleteFieldIndex(e,t){return p.resolve()}getDocumentsMatchingTarget(e,t){return p.resolve(null)}getFieldIndex(e,t){return p.resolve(null)}getFieldIndexes(e,t){return p.resolve([])}getNextCollectionGroupToUpdate(e){return p.resolve(null)}updateCollectionGroup(e,t,r){return p.resolve()}updateIndexEntries(e,t){return p.resolve()}}class Uc{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new q(x.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new q(x.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=new Uint8Array(0);class Tb{constructor(e){this.user=e,this.Ge=new Uc,this.Ke=new Bt(t=>dn(t),(t,r)=>Ds(t,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Ge.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Ge.add(t)});const i={collectionId:r,parent:ce(s)};return Bl(e).put(i)}return p.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Df(t),""],!1,!0);return Bl(e).qt(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(We(o.parent))}return r})}addFieldIndex(e,t){const r=Xs(e),s=function(i){return{indexId:i.indexId,collectionGroup:i.collectionGroup,fields:i.fields.map(o=>[o.fieldPath.canonicalString(),o.kind])}}(t);return delete s.indexId,r.add(s).next()}deleteFieldIndex(e,t){const r=Xs(e),s=Zs(e),i=Dr(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Dr(e);let s=!0;const i=new Map;return p.forEach(this.Qe(t),o=>this.getFieldIndex(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=F();return p.forEach(i,(a,c)=>{var u;v("IndexedDbIndexManager",`Using index ${u=a,`id=${u.indexId}|cg=${u.collectionGroup}|f=${u.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`} to execute ${dn(t)}`);const l=function(D,ne){const G=Ia(ne);if(G===void 0)return null;for(const H of Hs(D,G.fieldPath))switch(H.op){case"array-contains-any":return H.value.arrayValue.values||[];case"array-contains":return[H.value]}return null}(c,a),h=function(D,ne){const G=new Map;for(const H of Fn(ne))for(const O of Hs(D,H.fieldPath))switch(O.op){case"==":case"in":G.set(H.fieldPath.canonicalString(),O.value);break;case"not-in":case"!=":return G.set(H.fieldPath.canonicalString(),O.value),Array.from(G.values())}return null}(c,a),d=function(D,ne){const G=[];let H=!0;for(const Ge of Fn(ne)){let ke,Ke=!0;for(const Y of Hs(D,Ge.fieldPath)){let K,Pn=!0;switch(Y.op){case"<":case"<=":K="nullValue"in(O=Y.value)?dl:"booleanValue"in O?{booleanValue:!1}:"integerValue"in O||"doubleValue"in O?{doubleValue:NaN}:"timestampValue"in O?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in O?{stringValue:""}:"bytesValue"in O?{bytesValue:""}:"referenceValue"in O?tr(ft.empty(),I.empty()):"geoPointValue"in O?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in O?{arrayValue:{}}:"mapValue"in O?{mapValue:{}}:b();break;case"==":case"in":case">=":K=Y.value;break;case">":K=Y.value,Pn=!1;break;case"!=":case"not-in":K=dl}gl(ke,K)===K&&(ke=K,Ke=Pn)}if(D.startAt!==null){for(let Y=0;Y<D.orderBy.length;++Y)if(D.orderBy[Y].field.isEqual(Ge.fieldPath)){const K=D.startAt.position[Y];gl(ke,K)===K&&(ke=K,Ke=D.startAt.inclusive);break}}if(ke===void 0)return null;G.push(ke),H&&(H=Ke)}var O;return new Ot(G,H)}(c,a),m=function(D,ne){const G=[];let H=!0;for(const Ge of Fn(ne)){let ke,Ke=!0;for(const Y of Hs(D,Ge.fieldPath)){let K,Pn=!0;switch(Y.op){case">=":case">":K="nullValue"in(O=Y.value)?{booleanValue:!1}:"booleanValue"in O?{doubleValue:NaN}:"integerValue"in O||"doubleValue"in O?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in O?{stringValue:""}:"stringValue"in O?{bytesValue:""}:"bytesValue"in O?tr(ft.empty(),I.empty()):"referenceValue"in O?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in O?{arrayValue:{}}:"arrayValue"in O?{mapValue:{}}:"mapValue"in O?hl:b(),Pn=!1;break;case"==":case"in":case"<=":K=Y.value;break;case"<":K=Y.value,Pn=!1;break;case"!=":case"not-in":K=hl}yl(ke,K)===K&&(ke=K,Ke=Pn)}if(D.endAt!==null){for(let Y=0;Y<D.orderBy.length;++Y)if(D.orderBy[Y].field.isEqual(Ge.fieldPath)){const K=D.endAt.position[Y];yl(ke,K)===K&&(ke=K,Ke=D.endAt.inclusive);break}}if(ke===void 0)return null;G.push(ke),H&&(H=Ke)}var O;return new Ot(G,H)}(c,a),g=this.je(a,c,d),T=this.je(a,c,m),C=this.We(a,c,h),U=this.ze(a.indexId,l,g,!!d&&d.inclusive,T,!!m&&m.inclusive,C);return p.forEach(U,D=>r.Kt(D,t.limit).next(ne=>{ne.forEach(G=>{o=o.add(new I(We(G.documentKey)))})}))}).next(()=>o)}return p.resolve(null)})}Qe(e){let t=this.Ke.get(e);return t||(t=[e],this.Ke.set(e,t),t)}ze(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r!=null?r.length:1,i!=null?i.length:1),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.He(t[h/u]):Qs,m=r?this.Je(e,d,r[h%u],s):this.Ye(e),g=i?this.Xe(e,d,i[h%u],o):this.Ye(e+1);l.push(...this.createRange(m,g,a.map(T=>this.Je(e,d,T,!0))))}return l}Je(e,t,r,s){const i=new bt(e,I.empty(),t,r);return s?i:i.ke()}Xe(e,t,r,s){const i=new bt(e,I.empty(),t,r);return s?i.ke():i}Ye(e){return new bt(e,I.empty(),Qs,Qs)}getFieldIndex(e,t){const r=new Eb(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{const o=i.filter(a=>r.$e(a));return o.sort((a,c)=>c.fields.length-a.fields.length),o.length>0?o[0]:null})}Ze(e,t){const r=new Js;for(const s of Fn(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Ne(s.kind);jn.fe.Zt(i,o)}return r.Se()}He(e){const t=new Js;return jn.fe.Zt(e,t.Ne(0)),t.Se()}We(e,t,r){if(r===null)return[];let s=[];s.push(new Js);let i=0;for(const o of Fn(e)){const a=r[i++];for(const c of s)if(this.tn(t,o.fieldPath)&&us(a))s=this.en(s,o,a);else{const u=c.Ne(o.kind);jn.fe.Zt(a,u)}}return this.nn(s)}je(e,t,r){return r==null?null:this.We(e,t,r.position)}nn(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].Se();return t}en(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Js;c.seed(a.Se()),jn.fe.Zt(o,c.Ne(t.kind)),i.push(c)}return i}tn(e,t){return!!e.filters.find(r=>r instanceof ve&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Xs(e),s=Zs(e);return(t?r.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.qt()).next(i=>{const o=[];return p.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Ri(l.sequenceNumber,new pt(gn(l.readTime),new I(We(l.documentKey)),l.largestBatchId)):Ri.empty(),d=u.fields.map(([m,g])=>new lE(ae.fromServerFormat(m),g));return new Mf(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:R(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Xs(e),i=Zs(e);return this.sn(e).next(o=>s.qt("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>p.forEach(a,c=>i.put(function(u,l,h,d){return{indexId:u,uid:l.uid||"",sequenceNumber:h,readTime:mn(d.readTime),documentKey:ce(d.documentKey.path),largestBatchId:d.largestBatchId}}(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return p.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?p.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),p.forEach(a,c=>this.rn(e,s,c).next(u=>{const l=this.on(i,c);return u.isEqual(l)?p.resolve():this.un(e,i,u,l)}))))})}an(e,t,r){return Dr(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,documentKey:ce(t.key.path)})}cn(e,t,r){return Dr(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,ce(t.key.path)])}rn(e,t,r){const s=Dr(e);let i=new q(jt);return s.Wt({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,ce(t.path)])},(o,a)=>{i=i.add(new bt(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}on(e,t){let r=new q(jt);const s=this.Ze(t,e);if(s==null)return r;const i=Ia(t);if(i!=null){const o=e.data.field(i.fieldPath);if(us(o))for(const a of o.arrayValue.values||[])r=r.add(new bt(t.indexId,e.key,this.He(a),s))}else r=r.add(new bt(t.indexId,e.key,Qs,s));return r}un(e,t,r,s){v("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const i=[];return function(o,a,c,u,l){const h=o.getIterator(),d=a.getIterator();let m=On(h),g=On(d);for(;m||g;){let T=!1,C=!1;if(m&&g){const U=c(m,g);U<0?C=!0:U>0&&(T=!0)}else m!=null?C=!0:T=!0;T?(u(g),g=On(d)):C?(l(m),m=On(h)):(m=On(h),g=On(d))}}(r,s,jt,o=>{i.push(this.an(e,t,o))},o=>{i.push(this.cn(e,t,o))}),p.waitFor(i)}sn(e){let t=1;return Zs(e).Wt({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>jt(o,a)).filter((o,a,c)=>!a||jt(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=jt(o,e),c=jt(o,t);if(a===0)s[0]=e.ke();else if(a>0&&c<0)s.push(o),s.push(o.ke());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2)i.push(IDBKeyRange.bound([s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,""],[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,""]));return i}}function Bl(n){return pe(n,"collectionParents")}function Dr(n){return pe(n,"indexEntries")}function Xs(n){return pe(n,"indexConfiguration")}function Zs(n){return pe(n,"indexState")}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $l={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Oe{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Oe(e,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Wt({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{k(a===1)}));const u=[];for(const l of t.mutations){const h=dp(e,l.key.path,t.batchId);i.push(s.delete(h)),u.push(l.key)}return p.waitFor(i).next(()=>u)}function Li(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw b();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Oe.DEFAULT_COLLECTION_PERCENTILE=10,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Oe.DEFAULT=new Oe(41943040,Oe.DEFAULT_COLLECTION_PERCENTILE,Oe.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Oe.DISABLED=new Oe(-1,0,0);class Vc{constructor(e,t,r,s){this.userId=e,this.M=t,this.indexManager=r,this.referenceDelegate=s,this.hn={}}static Yt(e,t,r,s){k(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Vc(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return _t(e).Wt({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Vn(e),o=_t(e);return o.add({}).next(a=>{k(typeof a=="number");const c=new xc(a,t,r,s),u=function(d,m,g){const T=g.baseMutations.map(U=>fs(d.Jt,U)),C=g.mutations.map(U=>fs(d.Jt,U));return{userId:m,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:T,mutations:C}}(this.M,this.userId,c),l=[];let h=new q((d,m)=>R(d.canonicalString(),m.canonicalString()));for(const d of s){const m=dp(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(m,QE))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.hn[a]=c.keys()}),p.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return _t(e).get(t).next(r=>r?(k(r.userId===this.userId),Un(this.M,r)):null)}ln(e,t){return this.hn[t]?p.resolve(this.hn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.hn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return _t(e).Wt({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(k(a.batchId>=r),i=Un(this.M,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return _t(e).Wt({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return _t(e).qt("userMutationsIndex",t).next(r=>r.map(s=>Un(this.M,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=di(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Vn(e).Wt({range:s},(o,a,c)=>{const[u,l,h]=o,d=We(l);if(u===this.userId&&t.path.isEqual(d))return _t(e).get(h).next(m=>{if(!m)throw b();k(m.userId===this.userId),i.push(Un(this.M,m))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new q(R);const s=[];return t.forEach(i=>{const o=di(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Vn(e).Wt({range:a},(u,l,h)=>{const[d,m,g]=u,T=We(m);d===this.userId&&i.path.isEqual(T)?r=r.add(g):h.done()});s.push(c)}),p.waitFor(s).next(()=>this.fn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=di(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new q(R);return Vn(e).Wt({range:o},(c,u,l)=>{const[h,d,m]=c,g=We(d);h===this.userId&&r.isPrefixOf(g)?g.length===s&&(a=a.add(m)):l.done()}).next(()=>this.fn(e,a))}fn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(_t(e).get(i).next(o=>{if(o===null)throw b();k(o.userId===this.userId),r.push(Un(this.M,o))}))}),p.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return wp(e.Ht,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.dn(t.batchId)}),p.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}dn(e){delete this.hn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return p.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return Vn(e).Wt({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=We(i[1]);s.push(c)}else a.done()}).next(()=>{k(s.length===0)})})}containsKey(e,t){return Ip(e,this.userId,t)}_n(e){return _p(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function Ip(n,e,t){const r=di(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Vn(n).Wt({range:i,jt:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function _t(n){return pe(n,"mutations")}function Vn(n){return pe(n,"documentMutations")}function _p(n){return pe(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.wn=e}next(){return this.wn+=2,this.wn}static mn(){return new yn(0)}static gn(){return new yn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sb{constructor(e,t){this.referenceDelegate=e,this.M=t}allocateTargetId(e){return this.yn(e).next(t=>{const r=new yn(t.highestTargetId);return t.highestTargetId=r.next(),this.pn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.yn(e).next(t=>A.fromTimestamp(new J(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.yn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.yn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.pn(e,s)))}addTargetData(e,t){return this.In(e,t).next(()=>this.yn(e).next(r=>(r.targetCount+=1,this.Tn(t,r),this.pn(e,r))))}updateTargetData(e,t){return this.In(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Mn(e).delete(t.targetId)).next(()=>this.yn(e)).next(r=>(k(r.targetCount>0),r.targetCount-=1,this.pn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Mn(e).Wt((o,a)=>{const c=Mr(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>p.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Mn(e).Wt((r,s)=>{const i=Mr(s);t(i)})}yn(e){return jl(e).get("targetGlobalKey").next(t=>(k(t!==null),t))}pn(e,t){return jl(e).put("targetGlobalKey",t)}In(e,t){return Mn(e).put(vp(this.M,t))}Tn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.yn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=dn(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Mn(e).Wt({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=Mr(a);Ds(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=Tt(e);return t.forEach(o=>{const a=ce(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),p.waitFor(s)}removeMatchingKeys(e,t,r){const s=Tt(e);return p.forEach(t,i=>{const o=ce(i.path);return p.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=Tt(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=Tt(e);let i=F();return s.Wt({range:r,jt:!0},(o,a,c)=>{const u=We(o[1]),l=new I(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const r=ce(t.path),s=IDBKeyRange.bound([r],[Df(r)],!1,!0);let i=0;return Tt(e).Wt({index:"documentTargetsIndex",jt:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}Et(e,t){return Mn(e).get(t).next(r=>r?Mr(r):null)}}function Mn(n){return pe(n,"targets")}function jl(n){return pe(n,"targetGlobal")}function Tt(n){return pe(n,"targetDocuments")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kn(n){if(n.code!==f.FAILED_PRECONDITION||n.message!==mp)throw n;v("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gl([n,e],[t,r]){const s=R(n,t);return s===0?R(e,r):s}class Ab{constructor(e){this.En=e,this.buffer=new q(Gl),this.An=0}Rn(){return++this.An}bn(e){const t=[e,this.Rn()];if(this.buffer.size<this.En)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Gl(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class kb{constructor(e,t){this.garbageCollector=e,this.asyncQueue=t,this.Pn=!1,this.Vn=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.vn(e)}stop(){this.Vn&&(this.Vn.cancel(),this.Vn=null)}get started(){return this.Vn!==null}vn(e){const t=this.Pn?3e5:6e4;v("LruGarbageCollector",`Garbage collection scheduled in ${t}ms`),this.Vn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,async()=>{this.Vn=null,this.Pn=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){An(r)?v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await kn(r)}await this.vn(e)})}}class Nb{constructor(e,t){this.Sn=e,this.params=t}calculateTargetCount(e,t){return this.Sn.Dn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return p.resolve(Fe.A);const r=new Ab(t);return this.Sn.forEachTarget(e,s=>r.bn(s.sequenceNumber)).next(()=>this.Sn.Cn(e,s=>r.bn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Sn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Sn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(v("LruGarbageCollector","Garbage collection skipped; disabled"),p.resolve($l)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(v("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),$l):this.xn(e,t))}getCacheSize(e){return this.Sn.getCacheSize(e)}xn(e,t){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(v("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),ya()<=L.DEBUG&&v("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),p.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cb{constructor(e,t){this.db=e,this.garbageCollector=function(r,s){return new Nb(r,s)}(this,t)}Dn(e){const t=this.Nn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}Nn(e){let t=0;return this.Cn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Cn(e,t){return this.kn(e,(r,s)=>t(s))}addReference(e,t,r){return ei(e,r)}removeReference(e,t,r){return ei(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ei(e,t)}Mn(e,t){return function(r,s){let i=!1;return _p(r).zt(o=>Ip(r,o,s).next(a=>(a&&(i=!0),p.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.kn(e,(o,a)=>{if(a<=t){const c=this.Mn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,A.min()),Tt(e).delete([0,ce(o.path)])))});s.push(c)}}).next(()=>p.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ei(e,t)}kn(e,t){const r=Tt(e);let s,i=Fe.A;return r.Wt({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Fe.A&&t(new I(We(s)),i),i=u,s=c):i=Fe.A}).next(()=>{i!==Fe.A&&t(new I(We(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ei(n,e){return Tt(n).put(function(t,r){return{targetId:0,path:ce(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.changes=new Bt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,V.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?p.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e){this.M=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Gt(e).put(r)}removeEntry(e,t,r){return Gt(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Oi(i),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.On(e,r)))}getEntry(e,t){let r=V.newInvalidDocument(t);return Gt(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Rr(t))},(s,i)=>{r=this.Fn(t,i)}).next(()=>r)}$n(e,t){let r={size:0,document:V.newInvalidDocument(t)};return Gt(e).Wt({index:"documentKeyIndex",range:IDBKeyRange.only(Rr(t))},(s,i)=>{r={document:this.Fn(t,i),size:Li(i)}}).next(()=>r)}getEntries(e,t){let r=qe();return this.Bn(e,t,(s,i)=>{const o=this.Fn(s,i);r=r.insert(s,o)}).next(()=>r)}Ln(e,t){let r=qe(),s=new Q(I.comparator);return this.Bn(e,t,(i,o)=>{const a=this.Fn(i,o);r=r.insert(i,a),s=s.insert(i,Li(o))}).next(()=>({documents:r,Un:s}))}Bn(e,t,r){if(t.isEmpty())return p.resolve();let s=new q(zl);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(Rr(s.first()),Rr(s.last())),o=s.getIterator();let a=o.getNext();return Gt(e).Wt({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=I.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&zl(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.Ut(Rr(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getAllFromCollection(e,t,r){const s=[t.popLast().toArray(),t.lastSegment(),Oi(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],i=[t.popLast().toArray(),t.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Gt(e).qt(IDBKeyRange.bound(s,i,!0)).next(o=>{let a=qe();for(const c of o){const u=this.Fn(I.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);a=a.insert(u.key,u)}return a})}getAllFromCollectionGroup(e,t,r,s){let i=qe();const o=Wl(t,r),a=Wl(t,pt.max());return Gt(e).Wt({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Fn(I.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new Rb(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Kl(e).get("remoteDocumentGlobalKey").next(t=>(k(!!t),t))}On(e,t){return Kl(e).put("remoteDocumentGlobalKey",t)}Fn(e,t){if(t){const r=gb(this.M,t);if(!(r.isNoDocument()&&r.version.isEqual(A.min())))return r}return V.newInvalidDocument(e)}}class Rb extends Ep{constructor(e,t){super(),this.qn=e,this.trackRemovals=t,this.Gn=new Bt(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new q((i,o)=>R(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Gn.get(i);if(t.push(this.qn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=Ll(this.qn.M,o);s=s.add(i.path.popLast());const u=Li(c);r+=u-a.size,t.push(this.qn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=Ll(this.qn.M,o.convertToNoDocument(A.min()));t.push(this.qn.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.qn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.qn.updateMetadata(e,r)),p.waitFor(t)}getFromCache(e,t){return this.qn.$n(e,t).next(r=>(this.Gn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.qn.Ln(e,t).next(({documents:r,Un:s})=>(s.forEach((i,o)=>{this.Gn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function Kl(n){return pe(n,"remoteDocumentGlobal")}function Gt(n){return pe(n,"remoteDocumentsV14")}function Rr(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Wl(n,e){const t=e.documentKey.path.toArray();return[n,Oi(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function zl(n,e){const t=n.path.length-e.path.length;return t!==0?t:I.comparator(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pb{constructor(e){this.M=e}kt(e,t,r,s){const i=new Io("createOrUpgrade",t);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Pl,{unique:!0}),a.createObjectStore("documentMutations")}(e),Hl(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=p.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Hl(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:A.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").qt().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Pl,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return p.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.Kn(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Qn(i)))),r<7&&s>=7&&(o=o.next(()=>this.jn(i))),r<8&&s>=8&&(o=o.next(()=>this.Wn(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.zn(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:ub});c.createIndex("collectionPathOverlayIndex",lb,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",hb,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:XE});c.createIndex("documentKeyIndex",ZE),c.createIndex("collectionGroupIndex",eb)}(e)).next(()=>this.Hn(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>{(function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:ib}).createIndex("sequenceNumberIndex",ob,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:ab}).createIndex("documentKeyIndex",cb,{unique:!1})})(e)})),o}Qn(e){let t=0;return e.store("remoteDocuments").Wt((r,s)=>{t+=Li(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}Kn(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.qt().next(s=>p.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.qt("userMutationsIndex",o).next(a=>p.forEach(a,c=>{k(c.userId===i.userId);const u=Un(this.M,c);return wp(e,i.userId,u).next(()=>{})}))}))}jn(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Wt((o,a)=>{const c=new x(o),u=function(l){return[0,ce(l)]}(c);i.push(t.get(u).next(l=>l?p.resolve():(h=>t.put({targetId:0,path:ce(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>p.waitFor(i))})}Wn(e,t){e.createObjectStore("collectionParents",{keyPath:sb});const r=t.store("collectionParents"),s=new Uc,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:ce(c)})}};return t.store("remoteDocuments").Wt({jt:!0},(o,a)=>{const c=new x(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Wt({jt:!0},([o,a,c],u)=>{const l=We(a);return i(l.popLast())}))}zn(e){const t=e.store("targets");return t.Wt((r,s)=>{const i=Mr(s),o=vp(this.M,i);return t.put(o)})}Hn(e,t){const r=t.store("remoteDocuments"),s=[];return r.Wt((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new I(x.fromString(u.document.name).popFirst(5)):u.noDocument?I.fromSegments(u.noDocument.path):u.unknownDocument?I.fromSegments(u.unknownDocument.path):b()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>p.waitFor(s))}}function Hl(n){n.createObjectStore("targetDocuments",{keyPath:nb}).createIndex("documentTargetsIndex",rb,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",tb,{unique:!0}),n.createObjectStore("targetGlobal")}const zo="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class qc{constructor(e,t,r,s,i,o,a,c,u,l,h=13){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Jn=i,this.window=o,this.document=a,this.Yn=u,this.Xn=l,this.Zn=h,this.ts=null,this.es=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ns=null,this.inForeground=!1,this.ss=null,this.rs=null,this.os=Number.NEGATIVE_INFINITY,this.us=d=>Promise.resolve(),!qc.vt())throw new y(f.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Cb(this,s),this.cs=t+"main",this.M=new yp(c),this.hs=new ze(this.cs,this.Zn,new Pb(this.M)),this.ls=new Sb(this.referenceDelegate,this.M),this.fs=function(d){return new Db(d)}(this.M),this.ds=new yb,this.window&&this.window.localStorage?this._s=this.window.localStorage:(this._s=null,l===!1&&Z("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.ws().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new y(f.FAILED_PRECONDITION,zo);return this.gs(),this.ys(),this.ps(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.ls.getHighestSequenceNumber(e))}).then(e=>{this.ts=new Fe(e,this.Yn)}).then(()=>{this.es=!0}).catch(e=>(this.hs&&this.hs.close(),Promise.reject(e)))}Is(e){return this.us=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.hs.Ot(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Jn.enqueueAndForget(async()=>{this.started&&await this.ws()}))}ws(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>ti(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ts(e).next(t=>{t||(this.isPrimary=!1,this.Jn.enqueueRetryable(()=>this.us(!1)))})}).next(()=>this.Es(e)).next(t=>this.isPrimary&&!t?this.As(e).next(()=>!1):!!t&&this.Rs(e).next(()=>!0))).catch(e=>{if(An(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Jn.enqueueRetryable(()=>this.us(e)),this.isPrimary=e})}Ts(e){return Pr(e).get("owner").next(t=>p.resolve(this.bs(t)))}Ps(e){return ti(e).delete(this.clientId)}async Vs(){if(this.isPrimary&&!this.vs(this.os,18e5)){this.os=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=pe(t,"clientMetadata");return r.qt().next(s=>{const i=this.Ss(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return p.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this._s)for(const t of e)this._s.removeItem(this.Ds(t.clientId))}}ps(){this.rs=this.Jn.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.ws().then(()=>this.Vs()).then(()=>this.ps()))}bs(e){return!!e&&e.ownerId===this.clientId}Es(e){return this.Xn?p.resolve(!0):Pr(e).get("owner").next(t=>{if(t!==null&&this.vs(t.leaseTimestampMs,5e3)&&!this.Cs(t.ownerId)){if(this.bs(t)&&this.networkEnabled)return!0;if(!this.bs(t)){if(!t.allowTabSynchronization)throw new y(f.FAILED_PRECONDITION,zo);return!1}}return!(!this.networkEnabled||!this.inForeground)||ti(e).qt().next(r=>this.Ss(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&v("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.es=!1,this.xs(),this.rs&&(this.rs.cancel(),this.rs=null),this.Ns(),this.ks(),await this.hs.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Ol(e,Fe.A);return this.As(t).next(()=>this.Ps(t))}),this.hs.close(),this.Ms()}Ss(e,t){return e.filter(r=>this.vs(r.updateTimeMs,t)&&!this.Cs(r.clientId))}Os(){return this.runTransaction("getActiveClients","readonly",e=>ti(e).qt().next(t=>this.Ss(t,18e5).map(r=>r.clientId)))}get started(){return this.es}getMutationQueue(e,t){return Vc.Yt(e,this.M,t,this.referenceDelegate)}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getIndexManager(e){return new Tb(e)}getDocumentOverlayCache(e){return Fc.Yt(this.M,e)}getBundleCache(){return this.ds}runTransaction(e,t,r){v("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(o=this.Zn)===14?fb:o===13?pp:o===12?db:o===11?fp:void b();var o;let a;return this.hs.runTransaction(e,s,i,c=>(a=new Ol(c,this.ts?this.ts.next():Fe.A),t==="readwrite-primary"?this.Ts(a).next(u=>!!u||this.Es(a)).next(u=>{if(!u)throw Z(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Jn.enqueueRetryable(()=>this.us(!1)),new y(f.FAILED_PRECONDITION,mp);return r(a)}).next(u=>this.Rs(a).next(()=>u)):this.Fs(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Fs(e){return Pr(e).get("owner").next(t=>{if(t!==null&&this.vs(t.leaseTimestampMs,5e3)&&!this.Cs(t.ownerId)&&!this.bs(t)&&!(this.Xn||this.allowTabSynchronization&&t.allowTabSynchronization))throw new y(f.FAILED_PRECONDITION,zo)})}Rs(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Pr(e).put("owner",t)}static vt(){return ze.vt()}As(e){const t=Pr(e);return t.get("owner").next(r=>this.bs(r)?(v("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):p.resolve())}vs(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(Z(`Detected an update time that is in the future: ${e} > ${r}`),!1))}gs(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.ss=()=>{this.Jn.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.ws()))},this.document.addEventListener("visibilitychange",this.ss),this.inForeground=this.document.visibilityState==="visible")}Ns(){this.ss&&(this.document.removeEventListener("visibilitychange",this.ss),this.ss=null)}ys(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ns=()=>{this.xs(),Um()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Jn.enterRestrictedMode(!0),this.Jn.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ns))}ks(){this.ns&&(this.window.removeEventListener("pagehide",this.ns),this.ns=null)}Cs(e){var t;try{const r=((t=this._s)===null||t===void 0?void 0:t.getItem(this.Ds(e)))!==null;return v("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Z("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}xs(){if(this._s)try{this._s.setItem(this.Ds(this.clientId),String(Date.now()))}catch(e){Z("Failed to set zombie client id.",e)}}Ms(){if(this._s)try{this._s.removeItem(this.Ds(this.clientId))}catch{}}Ds(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Pr(n){return pe(n,"owner")}function ti(n){return pe(n,"clientMetadata")}function Bc(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb{constructor(e,t,r){this.fs=e,this.$s=t,this.indexManager=r}Bs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKey(e,t).next(r=>this.Ls(e,t,r))}Ls(e,t,r){return this.fs.getEntry(e,t).next(s=>{for(const i of r)i.applyToLocalView(s);return s})}Us(e,t){e.forEach((r,s)=>{for(const i of t)i.applyToLocalView(s)})}qs(e,t){return this.fs.getEntries(e,t).next(r=>this.Gs(e,r).next(()=>r))}Gs(e,t){return this.$s.getAllMutationBatchesAffectingDocumentKeys(e,t).next(r=>this.Us(t,r))}Ks(e,t,r){return function(s){return I.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.Qs(e,t.path):Nc(t)?this.js(e,t,r):this.Ws(e,t,r)}Qs(e,t){return this.Bs(e,new I(t)).next(r=>{let s=ba();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}js(e,t,r){const s=t.collectionGroup;let i=ba();return this.indexManager.getCollectionParents(e,s).next(o=>p.forEach(o,a=>{const c=function(u,l){return new vt(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.Ws(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}Ws(e,t,r){let s;return this.fs.getAllFromCollection(e,t.path,r).next(i=>(s=i,this.$s.getAllMutationBatchesAffectingQuery(e,t))).next(i=>{for(const o of i)for(const a of o.mutations){const c=a.key;let u=s.get(c);u==null&&(u=V.newInvalidDocument(c),s=s.insert(c,u)),Ea(a,u,o.localWriteTime),u.isFoundDocument()||(s=s.remove(c))}}).next(()=>(s.forEach((i,o)=>{Cc(t,o)||(s=s.remove(i))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.zs=r,this.Hs=s}static Js(e,t){let r=F(),s=F();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new $c(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{Ys(e){this.Xs=e}Ks(e,t,r,s){return function(i){return i.filters.length===0&&i.limit===null&&i.startAt==null&&i.endAt==null&&(i.explicitOrderBy.length===0||i.explicitOrderBy.length===1&&i.explicitOrderBy[0].field.isKeyField())}(t)||r.isEqual(A.min())?this.Zs(e,t):this.Xs.qs(e,s).next(i=>{const o=this.ti(t,i);return(ui(t)||xi(t))&&this.ei(t.limitType,o,s,r)?this.Zs(e,t):(ya()<=L.DEBUG&&v("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),_a(t)),this.Xs.Ks(e,t,Ff(r,-1)).next(a=>(o.forEach(c=>{a=a.insert(c.key,c)}),a)))})}ti(e,t){let r=new q(jf(e));return t.forEach((s,i)=>{Cc(e,i)&&(r=r.add(i))}),r}ei(e,t,r,s){if(r.size!==t.size)return!0;const i=e==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Zs(e,t){return ya()<=L.DEBUG&&v("QueryEngine","Using full collection scan to execute query:",_a(t)),this.Xs.Ks(e,t,pt.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ob{constructor(e,t,r,s){this.persistence=e,this.ni=t,this.M=s,this.si=new Q(R),this.ii=new Bt(i=>dn(i),Ds),this.ri=new Map,this.oi=e.getRemoteDocumentCache(),this.ls=e.getTargetCache(),this.ds=e.getBundleCache(),this.ui(r)}ui(e){this.indexManager=this.persistence.getIndexManager(e),this.$s=this.persistence.getMutationQueue(e,this.indexManager),this.ai=new xb(this.oi,this.$s,this.indexManager),this.oi.setIndexManager(this.indexManager),this.ni.Ys(this.ai)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.si))}}function Tp(n,e,t,r){return new Ob(n,e,t,r)}async function Sp(n,e){const t=_(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.$s.getAllMutationBatches(r).next(i=>(s=i,t.ui(e),t.$s.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=F();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.ai.qs(r,c).next(u=>({ci:u,removedBatchIds:o,addedBatchIds:a}))})})}function Lb(n,e){const t=_(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.oi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=p.resolve();return h.forEach(m=>{d=d.next(()=>u.getEntry(a,m)).next(g=>{const T=c.docVersions.get(m);k(T!==null),g.version.compareTo(T)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.$s.removeMutationBatch(a,l))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.$s.performConsistencyCheck(r)).next(()=>t.ai.qs(r,s))})}function Ap(n){const e=_(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ls.getLastRemoteSnapshotVersion(t))}function Mb(n,e){const t=_(n),r=e.snapshotVersion;let s=t.si;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.oi.newChangeBuffer({trackRemovals:!0});s=t.si;const a=[];e.targetChanges.forEach((u,l)=>{const h=s.get(l);if(!h)return;a.push(t.ls.removeMatchingKeys(i,u.removedDocuments,l).next(()=>t.ls.addMatchingKeys(i,u.addedDocuments,l)));let d=h.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(l)?d=d.withResumeToken(se.EMPTY_BYTE_STRING,A.min()).withLastLimboFreeSnapshotVersion(A.min()):u.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(u.resumeToken,r)),s=s.insert(l,d),function(m,g,T){return m.resumeToken.approximateByteSize()===0||g.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(h,d,u)&&a.push(t.ls.updateTargetData(i,d))});let c=qe();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(kp(i,o,e.documentUpdates).next(u=>{c=u})),!r.isEqual(A.min())){const u=t.ls.getLastRemoteSnapshotVersion(i).next(l=>t.ls.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return p.waitFor(a).next(()=>o.apply(i)).next(()=>t.ai.Gs(i,c)).next(()=>c)}).then(i=>(t.si=s,i))}function kp(n,e,t){let r=F();return t.forEach(s=>r=r.add(s)),e.getEntries(n,r).next(s=>{let i=qe();return t.forEach((o,a)=>{const c=s.get(o);a.isNoDocument()&&a.version.isEqual(A.min())?(e.removeEntry(o,a.readTime),i=i.insert(o,a)):!c.isValidDocument()||a.version.compareTo(c.version)>0||a.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(a),i=i.insert(o,a)):v("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",a.version)}),i})}function Fb(n,e){const t=_(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.$s.getNextMutationBatchAfterBatchId(r,e)))}function ir(n,e){const t=_(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.ls.getTargetData(r,e).next(i=>i?(s=i,p.resolve(s)):t.ls.allocateTargetId(r).next(o=>(s=new kt(e,o,0,r.currentSequenceNumber),t.ls.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.si.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.si=t.si.insert(r.targetId,r),t.ii.set(e,r.targetId)),r})}async function or(n,e,t){const r=_(n),s=r.si.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!An(o))throw o;v("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.si=r.si.remove(e),r.ii.delete(s.target)}function Mi(n,e,t){const r=_(n);let s=A.min(),i=F();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=_(a),h=l.ii.get(u);return h!==void 0?p.resolve(l.si.get(h)):l.ls.getTargetData(c,u)}(r,o,je(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.ls.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ni.Ks(o,e,t?s:A.min(),t?i:F())).next(a=>(Dp(r,$f(e),a),{documents:a,hi:i})))}function Np(n,e){const t=_(n),r=_(t.ls),s=t.si.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.Et(i,e).next(o=>o?o.target:null))}function Cp(n,e){const t=_(n),r=t.ri.get(e)||A.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.oi.getAllFromCollectionGroup(s,e,Ff(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(Dp(t,e,s),s))}function Dp(n,e,t){let r=A.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.ri.set(e,r)}async function Ub(n,e,t,r){const s=_(n);let i=F(),o=qe();for(const u of t){const l=e.li(u.metadata.name);u.document&&(i=i.add(l));const h=e.fi(u);h.setReadTime(e.di(u.metadata.readTime)),o=o.insert(l,h)}const a=s.oi.newChangeBuffer({trackRemovals:!0}),c=await ir(s,function(u){return je(Ir(x.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>kp(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.ls.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.ls.addMatchingKeys(u,i,c.targetId)).next(()=>s.ai.Gs(u,l)).next(()=>l)))}async function Vb(n,e,t=F()){const r=await ir(n,je(Mc(e.bundledQuery))),s=_(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=le(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.ds.saveNamedQuery(i,e);const a=r.withResumeToken(se.EMPTY_BYTE_STRING,o);return s.si=s.si.insert(a.targetId,a),s.ls.updateTargetData(i,a).next(()=>s.ls.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.ls.addMatchingKeys(i,t,r.targetId)).next(()=>s.ds.saveNamedQuery(i,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qb{constructor(e){this.M=e,this._i=new Map,this.wi=new Map}getBundleMetadata(e,t){return p.resolve(this._i.get(t))}saveBundleMetadata(e,t){var r;return this._i.set(t.id,{id:(r=t).id,version:r.version,createTime:le(r.createTime)}),p.resolve()}getNamedQuery(e,t){return p.resolve(this.wi.get(t))}saveNamedQuery(e,t){return this.wi.set(t.name,function(r){return{name:r.name,query:Mc(r.bundledQuery),readTime:le(r.readTime)}}(t)),p.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bb{constructor(){this.overlays=new Q(I.comparator),this.mi=new Map}getOverlay(e,t){return p.resolve(this.overlays.get(t))}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.Xt(e,t,i)}),p.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.mi.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.mi.delete(r)),p.resolve()}getOverlaysForCollection(e,t,r){const s=Br(),i=t.length+1,o=new I(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return p.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Q((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=Br(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Br(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return p.resolve(a)}Xt(e,t,r){if(r===null)return;const s=this.overlays.get(r.key);if(s!==null){const o=this.mi.get(s.largestBatchId).delete(r.key);this.mi.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Lc(t,r));let i=this.mi.get(t);i===void 0&&(i=F(),this.mi.set(t,i)),this.mi.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(){this.gi=new q(oe.yi),this.pi=new q(oe.Ii)}isEmpty(){return this.gi.isEmpty()}addReference(e,t){const r=new oe(e,t);this.gi=this.gi.add(r),this.pi=this.pi.add(r)}Ti(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Ei(new oe(e,t))}Ai(e,t){e.forEach(r=>this.removeReference(r,t))}Ri(e){const t=new I(new x([])),r=new oe(t,e),s=new oe(t,e+1),i=[];return this.pi.forEachInRange([r,s],o=>{this.Ei(o),i.push(o.key)}),i}bi(){this.gi.forEach(e=>this.Ei(e))}Ei(e){this.gi=this.gi.delete(e),this.pi=this.pi.delete(e)}Pi(e){const t=new I(new x([])),r=new oe(t,e),s=new oe(t,e+1);let i=F();return this.pi.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new oe(e,0),r=this.gi.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class oe{constructor(e,t){this.key=e,this.Vi=t}static yi(e,t){return I.comparator(e.key,t.key)||R(e.Vi,t.Vi)}static Ii(e,t){return R(e.Vi,t.Vi)||I.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.$s=[],this.vi=1,this.Si=new q(oe.yi)}checkEmpty(e){return p.resolve(this.$s.length===0)}addMutationBatch(e,t,r,s){const i=this.vi;this.vi++,this.$s.length>0&&this.$s[this.$s.length-1];const o=new xc(i,t,r,s);this.$s.push(o);for(const a of s)this.Si=this.Si.add(new oe(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(e,t){return p.resolve(this.Di(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Ci(r),i=s<0?0:s;return p.resolve(this.$s.length>i?this.$s[i]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.$s.length===0?-1:this.vi-1)}getAllMutationBatches(e){return p.resolve(this.$s.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new oe(t,0),s=new oe(t,Number.POSITIVE_INFINITY),i=[];return this.Si.forEachInRange([r,s],o=>{const a=this.Di(o.Vi);i.push(a)}),p.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new q(R);return t.forEach(s=>{const i=new oe(s,0),o=new oe(s,Number.POSITIVE_INFINITY);this.Si.forEachInRange([i,o],a=>{r=r.add(a.Vi)})}),p.resolve(this.xi(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;I.isDocumentKey(i)||(i=i.child(""));const o=new oe(new I(i),0);let a=new q(R);return this.Si.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.Vi)),!0)},o),p.resolve(this.xi(a))}xi(e){const t=[];return e.forEach(r=>{const s=this.Di(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){k(this.Ni(t.batchId,"removed")===0),this.$s.shift();let r=this.Si;return p.forEach(t.mutations,s=>{const i=new oe(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Si=r})}dn(e){}containsKey(e,t){const r=new oe(t,0),s=this.Si.firstAfterOrEqual(r);return p.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.$s.length,p.resolve()}Ni(e,t){return this.Ci(e)}Ci(e){return this.$s.length===0?0:e-this.$s[0].batchId}Di(e){const t=this.Ci(e);return t<0||t>=this.$s.length?null:this.$s[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jb{constructor(e){this.ki=e,this.docs=new Q(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.ki(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return p.resolve(r?r.document.mutableCopy():V.newInvalidDocument(t))}getEntries(e,t){let r=qe();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():V.newInvalidDocument(s))}),p.resolve(r)}getAllFromCollection(e,t,r){let s=qe();const i=new I(t.child("")),o=this.docs.getIteratorFrom(i);for(;o.hasNext();){const{key:a,value:{document:c}}=o.getNext();if(!t.isPrefixOf(a.path))break;a.path.length>t.length+1||dE(hE(c),r)<=0||(s=s.insert(c.key,c.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(e,t,r,s){b()}Mi(e,t){return p.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Gb(this)}getSize(e){return p.resolve(this.size)}}class Gb extends Ep{constructor(e){super(),this.qn=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.qn.addEntry(e,s)):this.qn.removeEntry(r)}),p.waitFor(t)}getFromCache(e,t){return this.qn.getEntry(e,t)}getAllFromCache(e,t){return this.qn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e){this.persistence=e,this.Oi=new Bt(t=>dn(t),Ds),this.lastRemoteSnapshotVersion=A.min(),this.highestTargetId=0,this.Fi=0,this.$i=new jc,this.targetCount=0,this.Bi=yn.mn()}forEachTarget(e,t){return this.Oi.forEach((r,s)=>t(s)),p.resolve()}getLastRemoteSnapshotVersion(e){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return p.resolve(this.Fi)}allocateTargetId(e){return this.highestTargetId=this.Bi.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Fi&&(this.Fi=t),p.resolve()}In(e){this.Oi.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Bi=new yn(t),this.highestTargetId=t),e.sequenceNumber>this.Fi&&(this.Fi=e.sequenceNumber)}addTargetData(e,t){return this.In(t),this.targetCount+=1,p.resolve()}updateTargetData(e,t){return this.In(t),p.resolve()}removeTargetData(e,t){return this.Oi.delete(t.target),this.$i.Ri(t.targetId),this.targetCount-=1,p.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.Oi.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.Oi.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),p.waitFor(i).next(()=>s)}getTargetCount(e){return p.resolve(this.targetCount)}getTargetData(e,t){const r=this.Oi.get(t)||null;return p.resolve(r)}addMatchingKeys(e,t,r){return this.$i.Ti(t,r),p.resolve()}removeMatchingKeys(e,t,r){this.$i.Ai(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),p.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.$i.Ri(t),p.resolve()}getMatchingKeysForTargetId(e,t){const r=this.$i.Pi(t);return p.resolve(r)}containsKey(e,t){return p.resolve(this.$i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,t){this.Li={},this.overlays={},this.ts=new Fe(0),this.es=!1,this.es=!0,this.referenceDelegate=e(this),this.ls=new Kb(this),this.indexManager=new bb,this.fs=function(r){return new jb(r)}(r=>this.referenceDelegate.Ui(r)),this.M=new yp(t),this.ds=new qb(this.M)}start(){return Promise.resolve()}shutdown(){return this.es=!1,Promise.resolve()}get started(){return this.es}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Bb,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Li[e.toKey()];return r||(r=new $b(t,this.referenceDelegate),this.Li[e.toKey()]=r),r}getTargetCache(){return this.ls}getRemoteDocumentCache(){return this.fs}getBundleCache(){return this.ds}runTransaction(e,t,r){v("MemoryPersistence","Starting transaction:",e);const s=new zb(this.ts.next());return this.referenceDelegate.qi(),r(s).next(i=>this.referenceDelegate.Gi(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ki(e,t){return p.or(Object.values(this.Li).map(r=>()=>r.containsKey(e,t)))}}class zb extends gp{constructor(e){super(),this.currentSequenceNumber=e}}class Gc{constructor(e){this.persistence=e,this.Qi=new jc,this.ji=null}static Wi(e){return new Gc(e)}get zi(){if(this.ji)return this.ji;throw b()}addReference(e,t,r){return this.Qi.addReference(r,t),this.zi.delete(r.toString()),p.resolve()}removeReference(e,t,r){return this.Qi.removeReference(r,t),this.zi.add(r.toString()),p.resolve()}markPotentiallyOrphaned(e,t){return this.zi.add(t.toString()),p.resolve()}removeTarget(e,t){this.Qi.Ri(t.targetId).forEach(s=>this.zi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.zi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}qi(){this.ji=new Set}Gi(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.zi,r=>{const s=I.fromPath(r);return this.Hi(e,s).next(i=>{i||t.removeEntry(s,A.min())})}).next(()=>(this.ji=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hi(e,t).next(r=>{r?this.zi.delete(t.toString()):this.zi.add(t.toString())})}Ui(e){return 0}Hi(e,t){return p.or([()=>p.resolve(this.Qi.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ki(e,t)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yl(n,e){return`firestore_clients_${n}_${e}`}function Jl(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Ho(n,e){return`firestore_targets_${n}_${e}`}class Fi{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Ji(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new y(s.error.code,s.error.message))),o?new Fi(e,t,s.state,i):(Z("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class jr{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Ji(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new y(r.error.code,r.error.message))),i?new jr(e,r.state,s):(Z("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Yi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ui{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ji(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=wo();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=xf(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Ui(e,i):(Z("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Kc{constructor(e,t){this.clientId=e,this.onlineState=t}static Ji(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Kc(t.clientId,t.onlineState):(Z("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Aa{constructor(){this.activeTargetIds=wo()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Yo{constructor(e,t,r,s,i){this.window=e,this.Jn=t,this.persistenceKey=r,this.tr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.er=this.nr.bind(this),this.sr=new Q(R),this.started=!1,this.ir=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.rr=Yl(this.persistenceKey,this.tr),this.ur=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.sr=this.sr.insert(this.tr,new Aa),this.ar=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.cr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.hr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.lr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.dr=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.er)}static vt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Os();for(const r of e){if(r===this.tr)continue;const s=this.getItem(Yl(this.persistenceKey,r));if(s){const i=Ui.Ji(r,s);i&&(this.sr=this.sr.insert(i.clientId,i))}}this._r();const t=this.storage.getItem(this.lr);if(t){const r=this.wr(t);r&&this.mr(r)}for(const r of this.ir)this.nr(r);this.ir=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ur,JSON.stringify(e))}getAllActiveQueryTargets(){return this.gr(this.sr)}isActiveQueryTarget(e){let t=!1;return this.sr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.yr(e,"pending")}updateMutationState(e,t,r){this.yr(e,t,r),this.pr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Ho(this.persistenceKey,e));if(r){const s=jr.Ji(e,r);s&&(t=s.state)}}return this.Ir.Xi(e),this._r(),t}removeLocalQueryTarget(e){this.Ir.Zi(e),this._r()}isLocalQueryTarget(e){return this.Ir.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Ho(this.persistenceKey,e))}updateQueryState(e,t,r){this.Tr(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.pr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Er(e)}notifyBundleLoaded(e){this.Ar(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.er),this.removeItem(this.rr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return v("SharedClientState","READ",e,t),t}setItem(e,t){v("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){v("SharedClientState","REMOVE",e),this.storage.removeItem(e)}nr(e){const t=e;if(t.storageArea===this.storage){if(v("SharedClientState","EVENT",t.key,t.newValue),t.key===this.rr)return void Z("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Jn.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.ar.test(t.key)){if(t.newValue==null){const r=this.Rr(t.key);return this.br(r,null)}{const r=this.Pr(t.key,t.newValue);if(r)return this.br(r.clientId,r)}}else if(this.cr.test(t.key)){if(t.newValue!==null){const r=this.Vr(t.key,t.newValue);if(r)return this.vr(r)}}else if(this.hr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(t.key===this.lr){if(t.newValue!==null){const r=this.wr(t.newValue);if(r)return this.mr(r)}}else if(t.key===this.ur){const r=function(s){let i=Fe.A;if(s!=null)try{const o=JSON.parse(s);k(typeof o=="number"),i=o}catch(o){Z("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);r!==Fe.A&&this.sequenceNumberHandler(r)}else if(t.key===this.dr){const r=this.Cr(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Nr(s)))}}}else this.ir.push(t)})}}get Ir(){return this.sr.get(this.tr)}_r(){this.setItem(this.rr,this.Ir.Yi())}yr(e,t,r){const s=new Fi(this.currentUser,e,t,r),i=Jl(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Yi())}pr(e){const t=Jl(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Er(e){const t={clientId:this.tr,onlineState:e};this.storage.setItem(this.lr,JSON.stringify(t))}Tr(e,t,r){const s=Ho(this.persistenceKey,e),i=new jr(e,t,r);this.setItem(s,i.Yi())}Ar(e){const t=JSON.stringify(Array.from(e));this.setItem(this.dr,t)}Rr(e){const t=this.ar.exec(e);return t?t[1]:null}Pr(e,t){const r=this.Rr(e);return Ui.Ji(r,t)}Vr(e,t){const r=this.cr.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Fi.Ji(new ge(i),s,t)}Sr(e,t){const r=this.hr.exec(e),s=Number(r[1]);return jr.Ji(s,t)}wr(e){return Kc.Ji(e)}Cr(e){return JSON.parse(e)}async vr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.kr(e.batchId,e.state,e.error);v("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Dr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}br(e,t){const r=t?this.sr.insert(e,t):this.sr.remove(e),s=this.gr(this.sr),i=this.gr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Or(o,a).then(()=>{this.sr=r})}mr(e){this.sr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}gr(e){let t=wo();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class Rp{constructor(){this.Fr=new Aa,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,r){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new Aa,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hb{Br(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Gr(),this.Kr=[],this.Qr()}Br(e){this.Kr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Kr)e(0)}Gr(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Kr)e(1)}static vt(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,r,s,i){const o=this.oo(e,t);v("RestConnection","Sending: ",o,r);const a={};return this.uo(a,s,i),this.ao(e,o,a,r).then(c=>(v("RestConnection","Received: ",c),c),c=>{throw ss("RestConnection",`${e} failed with error: `,c,"url: ",o,"request:",r),c})}co(e,t,r,s,i){return this.ro(e,t,r,s,i)}uo(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+wr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}oo(e,t){const r=Yb[e];return`${this.so}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}ao(e,t,r,s){return new Promise((i,o)=>{const a=new H_;a.listenOnce(K_.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case Ko.NO_ERROR:const u=a.getResponseJson();v("Connection","XHR received:",JSON.stringify(u)),i(u);break;case Ko.TIMEOUT:v("Connection",'RPC "'+e+'" timed out'),o(new y(f.DEADLINE_EXCEEDED,"Request time out"));break;case Ko.HTTP_ERROR:const l=a.getStatus();if(v("Connection",'RPC "'+e+'" failed with status:',l,"response text:",a.getResponseText()),l>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const g=m.toLowerCase().replace(/_/g,"-");return Object.values(f).indexOf(g)>=0?g:f.UNKNOWN}(h.status);o(new y(d,h.message))}else o(new y(f.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new y(f.UNAVAILABLE,"Connection failed."));break;default:b()}}finally{v("Connection",'RPC "'+e+'" completed.')}});const c=JSON.stringify(s);a.send(t,"POST",c,r,15)})}ho(e,t,r){const s=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=j_(),o=G_(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new z_({})),this.uo(a.initMessageHeaders,t,r),gh()||$i()||Mm()||La()||Fm()||Oa()||(a.httpHeadersOverwriteParam="$httpHeaders");const c=s.join("");v("Connection","Creating WebChannel: "+c,a);const u=i.createWebChannel(c,a);let l=!1,h=!1;const d=new Jb({jr:g=>{h?v("Connection","Not sending because WebChannel is closed:",g):(l||(v("Connection","Opening WebChannel transport."),u.open(),l=!0),v("Connection","WebChannel sending:",g),u.send(g))},Wr:()=>u.close()}),m=(g,T,C)=>{g.listen(T,U=>{try{C(U)}catch(D){setTimeout(()=>{throw D},0)}})};return m(u,zs.EventType.OPEN,()=>{h||v("Connection","WebChannel transport opened.")}),m(u,zs.EventType.CLOSE,()=>{h||(h=!0,v("Connection","WebChannel transport closed"),d.eo())}),m(u,zs.EventType.ERROR,g=>{h||(h=!0,ss("Connection","WebChannel transport errored:",g),d.eo(new y(f.UNAVAILABLE,"The operation could not be completed")))}),m(u,zs.EventType.MESSAGE,g=>{var T;if(!h){const C=g.data[0];k(!!C);const U=C,D=U.error||((T=U[0])===null||T===void 0?void 0:T.error);if(D){v("Connection","WebChannel received error:",D);const ne=D.status;let G=function(O){const Ge=X[O];if(Ge!==void 0)return Zf(Ge)}(ne),H=D.message;G===void 0&&(G=f.INTERNAL,H="Unknown error status: "+ne+" with message "+D.message),h=!0,d.eo(new y(G,H)),u.close()}else v("Connection","WebChannel received:",C),d.no(C)}}),m(o,W_.STAT_EVENT,g=>{g.stat===cl.PROXY?v("Connection","Detected buffering proxy"):g.stat===cl.NOPROXY&&v("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.Zr()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pp(){return typeof window<"u"?window:null}function fi(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fs(n){return new VE(n,!0)}class Wc{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Jn=e,this.timerId=t,this.lo=r,this.fo=s,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),r=Math.max(0,Date.now()-this.yo),s=Math.max(0,t-r);s>0&&v("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.mo=this.Jn.enqueueAfterDelay(this.timerId,s,()=>(this.yo=Date.now(),e())),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){this.mo!==null&&(this.mo.skipDelay(),this.mo=null)}cancel(){this.mo!==null&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e,t,r,s,i,o,a,c){this.Jn=e,this.Ao=r,this.Ro=s,this.bo=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Po=0,this.Vo=null,this.vo=null,this.stream=null,this.So=new Wc(e,t)}Do(){return this.state===1||this.state===5||this.Co()}Co(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&this.Vo===null&&(this.Vo=this.Jn.enqueueAfterDelay(this.Ao,6e4,()=>this.Mo()))}Oo(e){this.Fo(),this.stream.send(e)}async Mo(){if(this.Co())return this.close(0)}Fo(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}$o(){this.vo&&(this.vo.cancel(),this.vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,e!==4?this.So.reset():t&&t.code===f.RESOURCE_EXHAUSTED?(Z(t.toString()),Z("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===f.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Po===t&&this.Uo(r,s)},r=>{e(()=>{const s=new y(f.UNKNOWN,"Fetching auth token failed: "+r.message);return this.qo(s)})})}Uo(e,t){const r=this.Lo(this.Po);this.stream=this.Go(e,t),this.stream.zr(()=>{r(()=>(this.state=2,this.vo=this.Jn.enqueueAfterDelay(this.Ro,1e4,()=>(this.Co()&&(this.state=3),Promise.resolve())),this.listener.zr()))}),this.stream.Jr(s=>{r(()=>this.qo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}xo(){this.state=5,this.So.Io(async()=>{this.state=0,this.start()})}qo(e){return v("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.Jn.enqueueAndForget(()=>this.Po===e?t():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Xb extends xp{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.M=i}Go(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=$E(this.M,e),r=function(s){if(!("targetChange"in s))return A.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?A.min():i.readTime?le(i.readTime):A.min()}(e);return this.listener.Ko(t,r)}Qo(e){const t={};t.database=ds(this.M),t.addTarget=function(s,i){let o;const a=i.target;return o=Pi(a)?{documents:ap(s,a)}:{query:cp(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=np(s,i.resumeToken):i.snapshotVersion.compareTo(A.min())>0&&(o.readTime=ls(s,i.snapshotVersion.toTimestamp())),o}(this.M,e);const r=GE(this.M,e);r&&(t.labels=r),this.Oo(t)}jo(e){const t={};t.database=ds(this.M),t.removeTarget=e,this.Oo(t)}}class Zb extends xp{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.M=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Go(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(k(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=jE(e.writeResults,e.commitTime),r=le(e.commitTime);return this.listener.Jo(r,t)}return k(!e.writeResults||e.writeResults.length===0),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=ds(this.M),this.Oo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>fs(this.M,r))};this.Oo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=r,this.M=s,this.Zo=!1}tu(){if(this.Zo)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.ro(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}co(e,t,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.bo.co(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===f.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new y(f.UNKNOWN,s.toString())})}terminate(){this.Zo=!0}}class tT{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){this.eu===0&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve())))}uu(e){this.state==="Online"?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.au(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.au(),this.eu=0,e==="Online"&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Z(t),this.su=!1):v("OnlineStateTracker",t)}au(){this.nu!==null&&(this.nu.cancel(),this.nu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.cu=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br(o=>{r.enqueueAndForget(async()=>{$t(this)&&(v("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=_(a);c.lu.add(4),await _r(c),c._u.set("Unknown"),c.lu.delete(4),await Us(c)}(this))})}),this._u=new tT(r,s)}}async function Us(n){if($t(n))for(const e of n.fu)await e(!0)}async function _r(n){for(const e of n.fu)await e(!1)}function _o(n,e){const t=_(n);t.hu.has(e.targetId)||(t.hu.set(e.targetId,e),Yc(t)?Hc(t):br(t).Co()&&zc(t,e))}function ps(n,e){const t=_(n),r=br(t);t.hu.delete(e),r.Co()&&Op(t,e),t.hu.size===0&&(r.Co()?r.ko():$t(t)&&t._u.set("Unknown"))}function zc(n,e){n.wu.Z(e.targetId),br(n).Qo(e)}function Op(n,e){n.wu.Z(e),br(n).jo(e)}function Hc(n){n.wu=new ME({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.hu.get(e)||null}),br(n).start(),n._u.iu()}function Yc(n){return $t(n)&&!br(n).Do()&&n.hu.size>0}function $t(n){return _(n).lu.size===0}function Lp(n){n.wu=void 0}async function rT(n){n.hu.forEach((e,t)=>{zc(n,e)})}async function sT(n,e){Lp(n),Yc(n)?(n._u.uu(e),Hc(n)):n._u.set("Unknown")}async function iT(n,e,t){if(n._u.set("Online"),e instanceof tp&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.hu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.hu.delete(o),r.wu.removeTarget(o))}(n,e)}catch(r){v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Vi(n,r)}else if(e instanceof hi?n.wu.ut(e):e instanceof ep?n.wu._t(e):n.wu.ht(e),!t.isEqual(A.min()))try{const r=await Ap(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.wu.yt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.hu.get(c);u&&s.hu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.hu.get(a);if(!c)return;s.hu.set(a,c.withResumeToken(se.EMPTY_BYTE_STRING,c.snapshotVersion)),Op(s,a);const u=new kt(c.target,a,1,c.sequenceNumber);zc(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){v("RemoteStore","Failed to raise snapshot:",r),await Vi(n,r)}}async function Vi(n,e,t){if(!An(e))throw e;n.lu.add(1),await _r(n),n._u.set("Offline"),t||(t=()=>Ap(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{v("RemoteStore","Retrying IndexedDB access"),await t(),n.lu.delete(1),await Us(n)})}function Mp(n,e){return e().catch(t=>Vi(n,t,e))}async function Er(n){const e=_(n),t=Lt(e);let r=e.cu.length>0?e.cu[e.cu.length-1].batchId:-1;for(;oT(e);)try{const s=await Fb(e.localStore,r);if(s===null){e.cu.length===0&&t.ko();break}r=s.batchId,aT(e,s)}catch(s){await Vi(e,s)}Fp(e)&&Up(e)}function oT(n){return $t(n)&&n.cu.length<10}function aT(n,e){n.cu.push(e);const t=Lt(n);t.Co()&&t.zo&&t.Ho(e.mutations)}function Fp(n){return $t(n)&&!Lt(n).Do()&&n.cu.length>0}function Up(n){Lt(n).start()}async function cT(n){Lt(n).Xo()}async function uT(n){const e=Lt(n);for(const t of n.cu)e.Ho(t.mutations)}async function lT(n,e,t){const r=n.cu.shift(),s=Oc.from(r,e,t);await Mp(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Er(n)}async function hT(n,e){e&&Lt(n).zo&&await async function(t,r){if(s=r.code,Xf(s)&&s!==f.ABORTED){const i=t.cu.shift();Lt(t).No(),await Mp(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Er(t)}var s}(n,e),Fp(n)&&Up(n)}async function Xl(n,e){const t=_(n);t.asyncQueue.verifyOperationInProgress(),v("RemoteStore","RemoteStore received new credentials");const r=$t(t);t.lu.add(3),await _r(t),r&&t._u.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.lu.delete(3),await Us(t)}async function ka(n,e){const t=_(n);e?(t.lu.delete(2),await Us(t)):e||(t.lu.add(2),await _r(t),t._u.set("Unknown"))}function br(n){return n.mu||(n.mu=function(e,t,r){const s=_(e);return s.tu(),new Xb(t,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(n.datastore,n.asyncQueue,{zr:rT.bind(null,n),Jr:sT.bind(null,n),Ko:iT.bind(null,n)}),n.fu.push(async e=>{e?(n.mu.No(),Yc(n)?Hc(n):n._u.set("Unknown")):(await n.mu.stop(),Lp(n))})),n.mu}function Lt(n){return n.gu||(n.gu=function(e,t,r){const s=_(e);return s.tu(),new Zb(t,s.bo,s.authCredentials,s.appCheckCredentials,s.M,r)}(n.datastore,n.asyncQueue,{zr:cT.bind(null,n),Jr:hT.bind(null,n),Yo:uT.bind(null,n),Jo:lT.bind(null,n)}),n.fu.push(async e=>{e?(n.gu.No(),await Er(n)):(await n.gu.stop(),n.cu.length>0&&(v("RemoteStore",`Stopping write stream with ${n.cu.length} pending writes`),n.cu=[]))})),n.gu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new ue,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Jc(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new y(f.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tr(n,e){if(Z("AsyncQueue",`${e}: ${n}`),An(n))return new y(f.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn{constructor(e){this.comparator=e?(t,r)=>e(t,r)||I.comparator(t.key,r.key):(t,r)=>I.comparator(t.key,r.key),this.keyedMap=ba(),this.sortedSet=new Q(this.comparator)}static emptySet(e){return new Yn(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Yn)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Yn;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(){this.yu=new Q(I.comparator)}track(e){const t=e.doc.key,r=this.yu.get(t);r?e.type!==0&&r.type===3?this.yu=this.yu.insert(t,e):e.type===3&&r.type!==1?this.yu=this.yu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.yu=this.yu.remove(t):e.type===1&&r.type===2?this.yu=this.yu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):b():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal((t,r)=>{e.push(r)}),e}}class ar{constructor(e,t,r,s,i,o,a,c){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c}static fromInitialDocuments(e,t,r,s){const i=[];return t.forEach(o=>{i.push({type:0,doc:o})}),new ar(e,t,Yn.emptySet(t),i,r,s,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dT{constructor(){this.Iu=void 0,this.listeners=[]}}class fT{constructor(){this.queries=new Bt(e=>Bf(e),Rs),this.onlineState="Unknown",this.Tu=new Set}}async function Qc(n,e){const t=_(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new dT),s)try{i.Iu=await t.onListen(r)}catch(o){const a=Tr(o,`Initialization of query '${_a(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.Eu(t.onlineState),i.Iu&&e.Au(i.Iu)&&Zc(t)}async function Xc(n,e){const t=_(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function pT(n,e){const t=_(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.Au(s)&&(r=!0);o.Iu=s}}r&&Zc(t)}function mT(n,e,t){const r=_(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function Zc(n){n.Tu.forEach(e=>{e.next()})}class eu{constructor(e,t,r){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=r||{}}Au(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ar(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.Vu(e)&&(this.Ru.next(e),t=!0):this.vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}vu(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.Du||!r)&&(!e.docs.isEmpty()||t==="Offline")}Vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Su(e){e=ar.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gT{constructor(e,t){this.payload=e,this.byteLength=t}Cu(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{constructor(e){this.M=e}li(e){return tt(this.M,e)}fi(e){return e.metadata.exists?op(this.M,e.document,!1):V.newNoDocument(this.li(e.metadata.name),this.di(e.metadata.readTime))}di(e){return le(e)}}class yT{constructor(e,t,r){this.xu=e,this.localStore=t,this.M=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Vp(e)}Nu(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.payload.namedQuery)this.queries.push(e.payload.namedQuery);else if(e.payload.documentMetadata){this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++t;const r=x.fromString(e.payload.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}ku(e){const t=new Map,r=new eh(this.M);for(const s of e)if(s.metadata.queries){const i=r.li(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||F()).add(i);t.set(o,a)}}return t}async complete(){const e=await Ub(this.localStore,new eh(this.M),this.documents,this.xu.id),t=this.ku(this.documents);for(const r of this.queries)await Vb(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Mu:this.collectionGroups,Ou:e}}}function Vp(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e){this.key=e}}class Bp{constructor(e){this.key=e}}class $p{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=F(),this.mutatedKeys=F(),this.Lu=jf(e),this.Uu=new Yn(this.Lu)}get qu(){return this.Fu}Gu(e,t){const r=t?t.Ku:new Zl,s=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=ui(this.query)&&s.size===this.query.limit?s.last():null,u=xi(this.query)&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),m=Cc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),T=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let C=!1;d&&m?d.data.isEqual(m.data)?g!==T&&(r.track({type:3,doc:m}),C=!0):this.Qu(d,m)||(r.track({type:2,doc:m}),C=!0,(c&&this.Lu(m,c)>0||u&&this.Lu(m,u)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),C=!0):d&&!m&&(r.track({type:1,doc:d}),C=!0,(c||u)&&(a=!0)),C&&(m?(o=o.add(m),i=T?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),ui(this.query)||xi(this.query))for(;o.size>this.query.limit;){const l=ui(this.query)?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Uu:o,Ku:r,ei:a,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Ku.pu();i.sort((u,l)=>function(h,d){const m=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return b()}};return m(h)-m(d)}(u.type,l.type)||this.Lu(u.doc,l.doc)),this.ju(r);const o=t?this.Wu():[],a=this.Bu.size===0&&this.current?1:0,c=a!==this.$u;return this.$u=a,i.length!==0||c?{snapshot:new ar(this.query,e.Uu,s,i,e.mutatedKeys,a===0,c,!1),zu:o}:{zu:o}}Eu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Uu:this.Uu,Ku:new Zl,mutatedKeys:this.mutatedKeys,ei:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach(t=>this.Fu=this.Fu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Fu=this.Fu.delete(t)),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=F(),this.Uu.forEach(r=>{this.Hu(r.key)&&(this.Bu=this.Bu.add(r.key))});const t=[];return e.forEach(r=>{this.Bu.has(r)||t.push(new Bp(r))}),this.Bu.forEach(r=>{e.has(r)||t.push(new qp(r))}),t}Ju(e){this.Fu=e.hi,this.Bu=F();const t=this.Gu(e.documents);return this.applyChanges(t,!0)}Yu(){return ar.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,this.$u===0)}}class vT{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class wT{constructor(e){this.key=e,this.Xu=!1}}class IT{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Zu={},this.ta=new Bt(a=>Bf(a),Rs),this.ea=new Map,this.na=new Set,this.sa=new Q(I.comparator),this.ia=new Map,this.ra=new jc,this.oa={},this.ua=new Map,this.aa=yn.gn(),this.onlineState="Unknown",this.ca=void 0}get isPrimaryClient(){return this.ca===!0}}async function _T(n,e){const t=iu(n);let r,s;const i=t.ta.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.Yu();else{const o=await ir(t.localStore,je(e));t.isPrimaryClient&&_o(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await tu(t,e,r,a==="current")}return s}async function tu(n,e,t,r){n.ha=(l,h,d)=>async function(m,g,T,C){let U=g.view.Gu(T);U.ei&&(U=await Mi(m.localStore,g.query,!1).then(({documents:G})=>g.view.Gu(G,U)));const D=C&&C.targetChanges.get(g.targetId),ne=g.view.applyChanges(U,m.isPrimaryClient,D);return Na(m,g.targetId,ne.zu),ne.snapshot}(n,l,h,d);const s=await Mi(n.localStore,e,!0),i=new $p(e,s.hi),o=i.Gu(s.documents),a=Ms.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline"),c=i.applyChanges(o,n.isPrimaryClient,a);Na(n,t,c.zu);const u=new vT(e,t,i);return n.ta.set(e,u),n.ea.has(t)?n.ea.get(t).push(e):n.ea.set(t,[e]),c.snapshot}async function ET(n,e){const t=_(n),r=t.ta.get(e),s=t.ea.get(r.targetId);if(s.length>1)return t.ea.set(r.targetId,s.filter(i=>!Rs(i,e))),void t.ta.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await or(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ps(t.remoteStore,r.targetId),cr(t,r.targetId)}).catch(kn)):(cr(t,r.targetId),await or(t.localStore,r.targetId,!0))}async function bT(n,e,t){const r=ou(n);try{const s=await function(i,o){const a=_(i),c=J.now(),u=o.reduce((h,d)=>h.add(d.key),F());let l;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.ai.qs(h,u).next(d=>{l=d;const m=[];for(const g of o){const T=CE(g,l.get(g.key));T!=null&&m.push(new Sn(g.key,T,Lf(T.value.mapValue),ee.exists(!0)))}return a.$s.addMutationBatch(h,c,m,o)})).then(h=>(h.applyToLocalDocumentSet(l),{batchId:h.batchId,changes:l}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.oa[i.currentUser.toKey()];c||(c=new Q(R)),c=c.insert(o,a),i.oa[i.currentUser.toKey()]=c}(r,s.batchId,t),await wt(r,s.changes),await Er(r.remoteStore)}catch(s){const i=Tr(s,"Failed to persist write");t.reject(i)}}async function jp(n,e){const t=_(n);try{const r=await Mb(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.ia.get(i);o&&(k(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Xu=!0:s.modifiedDocuments.size>0?k(o.Xu):s.removedDocuments.size>0&&(k(o.Xu),o.Xu=!1))}),await wt(t,r,e)}catch(r){await kn(r)}}function th(n,e,t){const r=_(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.ta.forEach((i,o)=>{const a=o.view.Eu(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=_(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Eu(o)&&(c=!0)}),c&&Zc(a)}(r.eventManager,e),s.length&&r.Zu.Ko(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function TT(n,e,t){const r=_(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.ia.get(e),i=s&&s.key;if(i){let o=new Q(I.comparator);o=o.insert(i,V.newNoDocument(i,A.min()));const a=F().add(i),c=new Ls(A.min(),new Map,new q(R),o,a);await jp(r,c),r.sa=r.sa.remove(i),r.ia.delete(e),su(r)}else await or(r.localStore,e,!1).then(()=>cr(r,e,t)).catch(kn)}async function ST(n,e){const t=_(n),r=e.batch.batchId;try{const s=await Lb(t.localStore,e);ru(t,r,null),nu(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await wt(t,s)}catch(s){await kn(s)}}async function AT(n,e,t){const r=_(n);try{const s=await function(i,o){const a=_(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.$s.lookupMutationBatch(c,o).next(l=>(k(l!==null),u=l.keys(),a.$s.removeMutationBatch(c,l))).next(()=>a.$s.performConsistencyCheck(c)).next(()=>a.ai.qs(c,u))})}(r.localStore,e);ru(r,e,t),nu(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await wt(r,s)}catch(s){await kn(s)}}async function kT(n,e){const t=_(n);$t(t.remoteStore)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=_(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.$s.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const s=t.ua.get(r)||[];s.push(e),t.ua.set(r,s)}catch(r){const s=Tr(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function nu(n,e){(n.ua.get(e)||[]).forEach(t=>{t.resolve()}),n.ua.delete(e)}function ru(n,e,t){const r=_(n);let s=r.oa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.oa[r.currentUser.toKey()]=s}}function cr(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ea.get(e))n.ta.delete(r),t&&n.Zu.la(r,t);n.ea.delete(e),n.isPrimaryClient&&n.ra.Ri(e).forEach(r=>{n.ra.containsKey(r)||Gp(n,r)})}function Gp(n,e){n.na.delete(e.path.canonicalString());const t=n.sa.get(e);t!==null&&(ps(n.remoteStore,t),n.sa=n.sa.remove(e),n.ia.delete(t),su(n))}function Na(n,e,t){for(const r of t)r instanceof qp?(n.ra.addReference(r.key,e),NT(n,r)):r instanceof Bp?(v("SyncEngine","Document no longer in limbo: "+r.key),n.ra.removeReference(r.key,e),n.ra.containsKey(r.key)||Gp(n,r.key)):b()}function NT(n,e){const t=e.key,r=t.path.canonicalString();n.sa.get(t)||n.na.has(r)||(v("SyncEngine","New document in limbo: "+t),n.na.add(r),su(n))}function su(n){for(;n.na.size>0&&n.sa.size<n.maxConcurrentLimboResolutions;){const e=n.na.values().next().value;n.na.delete(e);const t=new I(x.fromString(e)),r=n.aa.next();n.ia.set(r,new wT(t)),n.sa=n.sa.insert(t,r),_o(n.remoteStore,new kt(je(Ir(t.path)),r,2,Fe.A))}}async function wt(n,e,t){const r=_(n),s=[],i=[],o=[];r.ta.isEmpty()||(r.ta.forEach((a,c)=>{o.push(r.ha(c,e,t).then(u=>{if(u){r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u.fromCache?"not-current":"current"),s.push(u);const l=$c.Js(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.Zu.Ko(s),await async function(a,c){const u=_(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>p.forEach(c,h=>p.forEach(h.zs,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>p.forEach(h.Hs,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!An(l))throw l;v("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.si.get(h),m=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(m);u.si=u.si.insert(h,g)}}}(r.localStore,i))}async function CT(n,e){const t=_(n);if(!t.currentUser.isEqual(e)){v("SyncEngine","User change. New user:",e.toKey());const r=await Sp(t.localStore,e);t.currentUser=e,function(s,i){s.ua.forEach(o=>{o.forEach(a=>{a.reject(new y(f.CANCELLED,i))})}),s.ua.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await wt(t,r.ci)}}function DT(n,e){const t=_(n),r=t.ia.get(e);if(r&&r.Xu)return F().add(r.key);{let s=F();const i=t.ea.get(e);if(!i)return s;for(const o of i){const a=t.ta.get(o);s=s.unionWith(a.view.qu)}return s}}async function RT(n,e){const t=_(n),r=await Mi(t.localStore,e.query,!0),s=e.view.Ju(r);return t.isPrimaryClient&&Na(t,e.targetId,s.zu),s}async function PT(n,e){const t=_(n);return Cp(t.localStore,e).then(r=>wt(t,r))}async function xT(n,e,t,r){const s=_(n),i=await function(o,a){const c=_(o),u=_(c.$s);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.ln(l,a).next(h=>h?c.ai.qs(l,h):p.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Er(s.remoteStore):t==="acknowledged"||t==="rejected"?(ru(s,e,r||null),nu(s,e),function(o,a){_(_(o).$s).dn(a)}(s.localStore,e)):b(),await wt(s,i)):v("SyncEngine","Cannot apply mutation batch with id: "+e)}async function OT(n,e){const t=_(n);if(iu(t),ou(t),e===!0&&t.ca!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await nh(t,r.toArray());t.ca=!0,await ka(t.remoteStore,!0);for(const i of s)_o(t.remoteStore,i)}else if(e===!1&&t.ca!==!1){const r=[];let s=Promise.resolve();t.ea.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(cr(t,o),or(t.localStore,o,!0))),ps(t.remoteStore,o)}),await s,await nh(t,r),function(i){const o=_(i);o.ia.forEach((a,c)=>{ps(o.remoteStore,c)}),o.ra.bi(),o.ia=new Map,o.sa=new Q(I.comparator)}(t),t.ca=!1,await ka(t.remoteStore,!1)}}async function nh(n,e,t){const r=_(n),s=[],i=[];for(const o of e){let a;const c=r.ea.get(o);if(c&&c.length!==0){a=await ir(r.localStore,je(c[0]));for(const u of c){const l=r.ta.get(u),h=await RT(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await Np(r.localStore,o);a=await ir(r.localStore,u),await tu(r,Kp(u),o,!1)}s.push(a)}return r.Zu.Ko(i),s}function Kp(n){return Vf(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function LT(n){const e=_(n);return _(_(e.localStore).persistence).Os()}async function MT(n,e,t,r){const s=_(n);if(s.ca)return void v("SyncEngine","Ignoring unexpected query state notification.");const i=s.ea.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Cp(s.localStore,$f(i[0])),a=Ls.createSynthesizedRemoteEventForCurrentChange(e,t==="current");await wt(s,o,a);break}case"rejected":await or(s.localStore,e,!0),cr(s,e,r);break;default:b()}}async function FT(n,e,t){const r=iu(n);if(r.ca){for(const s of e){if(r.ea.has(s)){v("SyncEngine","Adding an already active target "+s);continue}const i=await Np(r.localStore,s),o=await ir(r.localStore,i);await tu(r,Kp(i),o.targetId,!1),_o(r.remoteStore,o)}for(const s of t)r.ea.has(s)&&await or(r.localStore,s,!1).then(()=>{ps(r.remoteStore,s),cr(r,s)}).catch(kn)}}function iu(n){const e=_(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=jp.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=TT.bind(null,e),e.Zu.Ko=pT.bind(null,e.eventManager),e.Zu.la=mT.bind(null,e.eventManager),e}function ou(n){const e=_(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ST.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=AT.bind(null,e),e}function UT(n,e,t){const r=_(n);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const m=_(h),g=le(d.createTime);return m.persistence.runTransaction("hasNewerBundle","readonly",T=>m.ds.getBundleMetadata(T,d.id)).then(T=>!!T&&T.createTime.compareTo(g)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(Vp(a));const c=new yT(a,s.localStore,i.M);let u=await i.fa();for(;u;){const h=await c.Nu(u);h&&o._updateProgress(h),u=await i.fa()}const l=await c.complete();return await wt(s,l.Ou,void 0),await function(h,d){const m=_(h);return m.persistence.runTransaction("Save bundle","readwrite",g=>m.ds.saveBundleMetadata(g,d))}(s.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Mu)}catch(a){return ss("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class Wp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.M=Fs(e.databaseInfo.databaseId),this.sharedClientState=this.da(e),this.persistence=this._a(e),await this.persistence.start(),this.gcScheduler=this.wa(e),this.localStore=this.ma(e)}wa(e){return null}ma(e){return Tp(this.persistence,new bp,e.initialUser,this.M)}_a(e){return new Wb(Gc.Wi,this.M)}da(e){return new Rp}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class zp extends Wp{constructor(e,t,r){super(),this.ga=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.ga.initialize(this,e),await ou(this.ga.syncEngine),await Er(this.ga.remoteStore),await this.persistence.Is(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}ma(e){return Tp(this.persistence,new bp,e.initialUser,this.M)}wa(e){const t=this.persistence.referenceDelegate.garbageCollector;return new kb(t,e.asyncQueue)}_a(e){const t=Bc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Oe.withCacheSize(this.cacheSizeBytes):Oe.DEFAULT;return new qc(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,Pp(),fi(),this.M,this.sharedClientState,!!this.forceOwnership)}da(e){return new Rp}}class VT extends zp{constructor(e,t){super(e,t,!1),this.ga=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.ga.syncEngine;this.sharedClientState instanceof Yo&&(this.sharedClientState.syncEngine={kr:xT.bind(null,t),Mr:MT.bind(null,t),Or:FT.bind(null,t),Os:LT.bind(null,t),Nr:PT.bind(null,t)},await this.sharedClientState.start()),await this.persistence.Is(async r=>{await OT(this.ga.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}da(e){const t=Pp();if(!Yo.vt(t))throw new y(f.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Bc(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Yo(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class au{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>th(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=CT.bind(null,this.syncEngine),await ka(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new fT}createDatastore(e){const t=Fs(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new Qb(s));var s;return function(i,o,a,c){return new eT(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>th(this.syncEngine,a,0),o=Ql.vt()?new Ql:new Hb,new nT(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const l=new IT(r,s,i,o,a,c);return u&&(l.ca=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=_(e);v("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await _r(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eo{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ya(this.observer.next,e)}error(e){this.observer.error?this.ya(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}pa(){this.muted=!0}ya(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e,t){this.Ia=e,this.M=t,this.metadata=new ue,this.buffer=new Uint8Array,this.Ta=new TextDecoder("utf-8"),this.Ea().then(r=>{r&&r.Cu()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r?.payload)}`))},r=>this.metadata.reject(r))}close(){return this.Ia.cancel()}async getMetadata(){return this.metadata.promise}async fa(){return await this.getMetadata(),this.Ea()}async Ea(){const e=await this.Aa();if(e===null)return null;const t=this.Ta.decode(e),r=Number(t);isNaN(r)&&this.Ra(`length string (${t}) is not valid number`);const s=await this.ba(r);return new gT(JSON.parse(s),e.length+r)}Pa(){return this.buffer.findIndex(e=>e===123)}async Aa(){for(;this.Pa()<0&&!await this.Va(););if(this.buffer.length===0)return null;const e=this.Pa();e<0&&this.Ra("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async ba(e){for(;this.buffer.length<e;)await this.Va()&&this.Ra("Reached the end of bundle when more is expected.");const t=this.Ta.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Ra(e){throw this.Ia.cancel(),new Error(`Invalid bundle format: ${e}`)}async Va(){const e=await this.Ia.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new y(f.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,s){const i=_(r),o=ds(i.M)+"/documents",a={documents:s.map(h=>hs(i.M,h))},c=await i.co("BatchGetDocuments",o,a),u=new Map;c.forEach(h=>{const d=BE(i.M,h);u.set(d.key.toString(),d)});const l=[];return s.forEach(h=>{const d=u.get(h.toString());k(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Os(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=I.fromPath(r);this.mutations.push(new Dc(s,this.precondition(s)))}),await async function(t,r){const s=_(t),i=ds(s.M)+"/documents",o={writes:r.map(a=>fs(s.M,a))};await s.ro("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw b();t=A.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new y(f.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?ee.updateTime(t):ee.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(A.min()))throw new y(f.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ee.updateTime(t)}return ee.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t,r,s){this.asyncQueue=e,this.datastore=t,this.updateFunction=r,this.deferred=s,this.va=5,this.So=new Wc(this.asyncQueue,"transaction_retry")}run(){this.va-=1,this.Sa()}Sa(){this.So.Io(async()=>{const e=new BT(this.datastore),t=this.Da(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Ca(s)}))}).catch(r=>{this.Ca(r)})})}Da(e){try{const t=this.updateFunction(e);return!Tn(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Ca(e){this.va>0&&this.xa(e)?(this.va-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sa(),Promise.resolve()))):this.deferred.reject(e)}xa(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||!Xf(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=ge.UNAUTHENTICATED,this.clientId=Cf.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{v("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(v("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new y(f.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ue;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Tr(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hp(n,e){n.asyncQueue.verifyOperationInProgress(),v("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Sp(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n.offlineComponents=e}async function Yp(n,e){n.asyncQueue.verifyOperationInProgress();const t=await cu(n);v("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>Xl(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Xl(e.remoteStore,i)),n.onlineComponents=e}async function cu(n){return n.offlineComponents||(v("FirestoreClient","Using default OfflineComponentProvider"),await Hp(n,new Wp)),n.offlineComponents}async function bo(n){return n.onlineComponents||(v("FirestoreClient","Using default OnlineComponentProvider"),await Yp(n,new au)),n.onlineComponents}function Jp(n){return cu(n).then(e=>e.persistence)}function uu(n){return cu(n).then(e=>e.localStore)}function Qp(n){return bo(n).then(e=>e.remoteStore)}function lu(n){return bo(n).then(e=>e.syncEngine)}async function ur(n){const e=await bo(n),t=e.eventManager;return t.onListen=_T.bind(null,e.syncEngine),t.onUnlisten=ET.bind(null,e.syncEngine),t}function GT(n){return n.asyncQueue.enqueue(async()=>{const e=await Jp(n),t=await Qp(n);return e.setNetworkEnabled(!0),function(r){const s=_(r);return s.lu.delete(0),Us(s)}(t)})}function KT(n){return n.asyncQueue.enqueue(async()=>{const e=await Jp(n),t=await Qp(n);return e.setNetworkEnabled(!1),async function(r){const s=_(r);s.lu.add(0),await _r(s),s._u.set("Offline")}(t)})}function WT(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const u=_(a);return u.persistence.runTransaction("read document","readonly",l=>u.ai.Bs(l,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new y(f.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Tr(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await uu(n),e,t)),t.promise}function Xp(n,e,t={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Eo({next:h=>{i.enqueueAndForget(()=>Xc(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new y(f.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new eu(Ir(o.path),u,{includeMetadataChanges:!0,Du:!0});return Qc(s,l)}(await ur(n),n.asyncQueue,e,t,r)),r.promise}function zT(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await Mi(r,s,!0),a=new $p(s,o.hi),c=a.Gu(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=Tr(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await uu(n),e,t)),t.promise}function Zp(n,e,t={}){const r=new ue;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new Eo({next:h=>{i.enqueueAndForget(()=>Xc(s,l)),h.fromCache&&a.source==="server"?c.reject(new y(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new eu(o,u,{includeMetadataChanges:!0,Du:!0});return Qc(s,l)}(await ur(n),n.asyncQueue,e,t,r)),r.promise}function HT(n,e){const t=new Eo(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,s){_(r).Tu.add(s),s.next()}(await ur(n),t)),()=>{t.pa(),n.asyncQueue.enqueueAndForget(async()=>function(r,s){_(r).Tu.delete(s)}(await ur(n),t))}}function YT(n,e){const t=new ue;return n.asyncQueue.enqueueAndForget(async()=>{const r=await function(s){return bo(s).then(i=>i.datastore)}(n);new $T(n.asyncQueue,r,e,t).run()}),t.promise}function JT(n,e,t,r){const s=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new qT(c,u)}(function(c,u){if(c instanceof Uint8Array)return rh(c,u);if(c instanceof ArrayBuffer)return rh(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Fs(e));n.asyncQueue.enqueueAndForget(async()=>{UT(await lu(n),s,r)})}function QT(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const s=_(t);return s.persistence.runTransaction("Get named query","readonly",i=>s.ds.getNamedQuery(i,r))}(await uu(n),e))}const sh=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(n,e,t){if(!t)throw new y(f.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function em(n,e,t,r){if(e===!0&&r===!0)throw new y(f.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function ih(n){if(!I.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function oh(n){if(I.isDocumentKey(n))throw new y(f.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function To(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":b()}function M(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new y(f.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=To(n);throw new y(f.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function tm(n,e){if(e<=0)throw new y(f.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ah{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new y(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new y(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,em("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t,r){this._authCredentials=t,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1,e instanceof ft?this._databaseId=e:(this._app=e,this._databaseId=function(s){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new y(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ft(s.options.projectId)}(e))}get app(){if(!this._app)throw new y(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new X_;switch(t.type){case"gapi":const r=t.client;return k(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new nE(r,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new y(f.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=sh.get(e);t&&(v("ComponentProvider","Removing Datastore"),sh.delete(e),t.terminate())}(this),Promise.resolve()}}function XT(n,e,t,r={}){var s;const i=(n=M(n,Vs))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&ss("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ge.MOCK_USER;else{o=Om(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new y(f.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ge(c)}n._authCredentials=new Z_(new Nf(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new nt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new B(this.firestore,e,this._key)}}class Ae{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ae(this.firestore,e,this._query)}}class nt extends Ae{constructor(e,t,r){super(e,t,Ir(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new B(this.firestore,null,new I(e))}withConverter(e){return new nt(this.firestore,e,this._path)}}function nm(n,e,...t){if(n=S(n),hu("collection","path",e),n instanceof Vs){const r=x.fromString(e,...t);return oh(r),new nt(n,null,r)}{if(!(n instanceof B||n instanceof nt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(e,...t));return oh(r),new nt(n.firestore,null,r)}}function ZT(n,e){if(n=M(n,Vs),hu("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new y(f.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Ae(n,null,function(t){return new vt(x.emptyPath(),t)}(e))}function qi(n,e,...t){if(n=S(n),arguments.length===1&&(e=Cf.R()),hu("doc","path",e),n instanceof Vs){const r=x.fromString(e,...t);return ih(r),new B(n,null,new I(r))}{if(!(n instanceof B||n instanceof nt))throw new y(f.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(x.fromString(e,...t));return ih(r),new B(n.firestore,n instanceof nt?n.converter:null,new I(r))}}function rm(n,e){return n=S(n),e=S(e),(n instanceof B||n instanceof nt)&&(e instanceof B||e instanceof nt)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function sm(n,e){return n=S(n),e=S(e),n instanceof Ae&&e instanceof Ae&&n.firestore===e.firestore&&Rs(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eS{constructor(){this.Na=Promise.resolve(),this.ka=[],this.Ma=!1,this.Oa=[],this.Fa=null,this.$a=!1,this.Ba=!1,this.La=[],this.So=new Wc(this,"async_queue_retry"),this.Ua=()=>{const t=fi();t&&v("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const e=fi();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Ua)}get isShuttingDown(){return this.Ma}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.qa(),this.Ga(e)}enterRestrictedMode(e){if(!this.Ma){this.Ma=!0,this.Ba=e||!1;const t=fi();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Ua)}}enqueue(e){if(this.qa(),this.Ma)return new Promise(()=>{});const t=new ue;return this.Ga(()=>this.Ma&&this.Ba?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ka.push(e),this.Ka()))}async Ka(){if(this.ka.length!==0){try{await this.ka[0](),this.ka.shift(),this.So.reset()}catch(e){if(!An(e))throw e;v("AsyncQueue","Operation failed with retryable error: "+e)}this.ka.length>0&&this.So.Io(()=>this.Ka())}}Ga(e){const t=this.Na.then(()=>(this.$a=!0,e().catch(r=>{this.Fa=r,this.$a=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw Z("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.$a=!1,r))));return this.Na=t,t}enqueueAfterDelay(e,t,r){this.qa(),this.La.indexOf(e)>-1&&(t=0);const s=Jc.createAndSchedule(this,e,t,r,i=>this.Qa(i));return this.Oa.push(s),s}qa(){this.Fa&&b()}verifyOperationInProgress(){}async ja(){let e;do e=this.Na,await e;while(e!==this.Na)}Wa(e){for(const t of this.Oa)if(t.timerId===e)return!0;return!1}za(e){return this.ja().then(()=>{this.Oa.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.Oa)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.ja()})}Ha(e){this.La.push(e)}Qa(e){const t=this.Oa.indexOf(e);this.Oa.splice(t,1)}}function Ca(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class tS{constructor(){this._progressObserver={},this._taskCompletionResolver=new ue,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS=-1;class z extends Vs{constructor(e,t,r){super(e,t,r),this.type="firestore",this._queue=new eS,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||im(this),this._firestoreClient.terminate()}}function me(n){return n._firestoreClient||im(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function im(n){var e;const t=n._freezeSettings(),r=function(s,i,o,a){return new uE(s,i,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,t);n._firestoreClient=new jT(n._authCredentials,n._appCheckCredentials,n._queue,r)}function rS(n,e){am(n=M(n,z));const t=me(n),r=n._freezeSettings(),s=new au;return om(t,s,new zp(s,r.cacheSizeBytes,e?.forceOwnership))}function sS(n){am(n=M(n,z));const e=me(n),t=n._freezeSettings(),r=new au;return om(e,r,new VT(r,t.cacheSizeBytes))}function om(n,e,t){const r=new ue;return n.asyncQueue.enqueue(async()=>{try{await Hp(n,t),await Yp(n,e),r.resolve()}catch(s){if(!function(i){return i.name==="FirebaseError"?i.code===f.FAILED_PRECONDITION||i.code===f.UNIMPLEMENTED:typeof DOMException<"u"&&i instanceof DOMException?i.code===22||i.code===20||i.code===11:!0}(s))throw s;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+s),r.reject(s)}}).then(()=>r.promise)}function iS(n){if(n._initialized&&!n._terminated)throw new y(f.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new ue;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!ze.vt())return Promise.resolve();const r=t+"main";await ze.delete(r)}(Bc(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function oS(n){return function(e){const t=new ue;return e.asyncQueue.enqueueAndForget(async()=>kT(await lu(e),t)),t.promise}(me(n=M(n,z)))}function aS(n){return GT(me(n=M(n,z)))}function cS(n){return KT(me(n=M(n,z)))}function uS(n,e){const t=me(n=M(n,z)),r=new tS;return JT(t,n._databaseId,e,r),r}function lS(n,e){return QT(me(n=M(n,z)),e).then(t=>t?new Ae(n,null,t.query):null)}function am(n){if(n._initialized||n._terminated)throw new y(f.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new y(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ae(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ot(se.fromBase64String(e))}catch(t){throw new y(f.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new ot(se.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new y(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new y(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=/^__.*__$/;class dS{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Sn(e,this.data,this.fieldMask,t,this.fieldTransforms):new xs(e,this.data,t,this.fieldTransforms)}}class cm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Sn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function um(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw b()}}class Ao{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.M=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ja(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ya(){return this.settings.Ya}Xa(e){return new Ao(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.M,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Za(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Xa({path:r,tc:!1});return s.ec(e),s}nc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Xa({path:r,tc:!1});return s.Ja(),s}sc(e){return this.Xa({path:void 0,tc:!0})}ic(e){return Bi(e,this.settings.methodName,this.settings.rc||!1,this.path,this.settings.oc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Ja(){if(this.path)for(let e=0;e<this.path.length;e++)this.ec(this.path.get(e))}ec(e){if(e.length===0)throw this.ic("Document fields must not be empty");if(um(this.Ya)&&hS.test(e))throw this.ic('Document fields cannot begin and end with "__"')}}class fS{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.M=r||Fs(e)}uc(e,t,r,s=!1){return new Ao({Ya:e,methodName:t,oc:r,path:ae.emptyPath(),tc:!1,rc:s},this.databaseId,this.M,this.ignoreUndefinedProperties)}}function Cn(n){const e=n._freezeSettings(),t=Fs(n._databaseId);return new fS(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ko(n,e,t,r,s,i={}){const o=n.uc(i.merge||i.mergeFields?2:0,e,t,s);mu("Data must be an object, but it was:",o,r);const a=dm(r,o);let c,u;if(i.merge)c=new er(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Da(e,h,t);if(!o.contains(d))throw new y(f.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);pm(l,d)||l.push(d)}c=new er(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new dS(new Te(a),c,u)}class qs extends Nn{_toFieldTransform(e){if(e.Ya!==2)throw e.Ya===1?e.ic(`${this._methodName}() can only appear at the top level of your update data`):e.ic(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof qs}}function lm(n,e,t){return new Ao({Ya:3,oc:e.settings.oc,methodName:n._methodName,tc:t},e.databaseId,e.M,e.ignoreUndefinedProperties)}class du extends Nn{_toFieldTransform(e){return new Ps(e.path,new rr)}isEqual(e){return e instanceof du}}class pS extends Nn{constructor(e,t){super(e),this.ac=t}_toFieldTransform(e){const t=lm(this,e,!0),r=this.ac.map(i=>Dn(i,t)),s=new fn(r);return new Ps(e.path,s)}isEqual(e){return this===e}}class mS extends Nn{constructor(e,t){super(e),this.ac=t}_toFieldTransform(e){const t=lm(this,e,!0),r=this.ac.map(i=>Dn(i,t)),s=new pn(r);return new Ps(e.path,s)}isEqual(e){return this===e}}class gS extends Nn{constructor(e,t){super(e),this.cc=t}_toFieldTransform(e){const t=new sr(e.M,Wf(e.M,this.cc));return new Ps(e.path,t)}isEqual(e){return this===e}}function fu(n,e,t,r){const s=n.uc(1,e,t);mu("Data must be an object, but it was:",s,r);const i=[],o=Te.empty();bn(r,(c,u)=>{const l=gu(e,c,t);u=S(u);const h=s.nc(l);if(u instanceof qs)i.push(l);else{const d=Dn(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new er(i);return new cm(o,a,s.fieldTransforms)}function pu(n,e,t,r,s,i){const o=n.uc(1,e,t),a=[Da(e,r,t)],c=[s];if(i.length%2!=0)throw new y(f.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Da(e,i[d])),c.push(i[d+1]);const u=[],l=Te.empty();for(let d=a.length-1;d>=0;--d)if(!pm(u,a[d])){const m=a[d];let g=c[d];g=S(g);const T=o.nc(m);if(g instanceof qs)u.push(m);else{const C=Dn(g,T);C!=null&&(u.push(m),l.set(m,C))}}const h=new er(u);return new cm(l,h,o.fieldTransforms)}function hm(n,e,t,r=!1){return Dn(t,n.uc(r?4:3,e))}function Dn(n,e){if(fm(n=S(n)))return mu("Unsupported field value:",e,n),dm(n,e);if(n instanceof Nn)return function(t,r){if(!um(r.Ya))throw r.ic(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ic(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.tc&&e.Ya!==4)throw e.ic("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Dn(o,r.sc(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=S(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Wf(r.M,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=J.fromDate(t);return{timestampValue:ls(r.M,s)}}if(t instanceof J){const s=new J(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:ls(r.M,s)}}if(t instanceof So)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof ot)return{bytesValue:np(r.M,t._byteString)};if(t instanceof B){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ic(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Rc(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ic(`Unsupported field value: ${To(t)}`)}(n,e)}function dm(n,e){const t={};return Rf(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):bn(n,(r,s)=>{const i=Dn(s,e.Za(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function fm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof J||n instanceof So||n instanceof ot||n instanceof B||n instanceof Nn)}function mu(n,e,t){if(!fm(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=To(t);throw r==="an object"?e.ic(n+" a custom object"):e.ic(n+" "+r)}}function Da(n,e,t){if((e=S(e))instanceof Mt)return e._internalPath;if(typeof e=="string")return gu(n,e);throw Bi("Field path arguments must be of type string or ",n,!1,void 0,t)}const yS=new RegExp("[~\\*/\\[\\]]");function gu(n,e,t){if(e.search(yS)>=0)throw Bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Mt(...e.split("."))._internalPath}catch{throw Bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Bi(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new y(f.INVALID_ARGUMENT,a+n+c)}function pm(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new B(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new vS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(No("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class vS extends ms{data(){return super.data()}}function No(n,e){return typeof e=="string"?gu(n,e):e instanceof Mt?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mt extends ms{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gr(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(No("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Gr extends mt{data(e={}){return super.data(e)}}class Ft{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Qt(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Gr(this._firestore,this._userDataWriter,r.key,r,new Qt(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new y(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new Gr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qt(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:i++}))}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Gr(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Qt(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:wS(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function wS(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return b()}}function mm(n,e){return n instanceof mt&&e instanceof mt?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Ft&&e instanceof Ft&&n._firestore===e._firestore&&sm(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n){if(xi(n)&&n.explicitOrderBy.length===0)throw new y(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bs{}function Et(n,...e){for(const t of e)n=t._apply(n);return n}class IS extends Bs{constructor(e,t,r){super(),this.hc=e,this.lc=t,this.fc=r,this.type="where"}_apply(e){const t=Cn(e.firestore),r=function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new y(f.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){uh(l,u);const m=[];for(const g of l)m.push(ch(a,s,g));h={arrayValue:{values:m}}}else h=ch(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||uh(l,u),h=hm(o,i,l,u==="in"||u==="not-in");const d=ve.create(c,u,h);return function(m,g){if(g.S()){const C=kc(m);if(C!==null&&!C.isEqual(g.field))throw new y(f.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${C.toString()}' and '${g.field.toString()}'`);const U=Ac(m);U!==null&&_m(m,g.field,U)}const T=function(C,U){for(const D of C.filters)if(U.indexOf(D.op)>=0)return D.op;return null}(m,function(C){switch(C){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(g.op));if(T!==null)throw T===g.op?new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${g.op.toString()}' filter.`):new y(f.INVALID_ARGUMENT,`Invalid query. You cannot use '${g.op.toString()}' filters with '${T.toString()}' filters.`)}(s,d),d}(e._query,"where",t,e.firestore._databaseId,this.hc,this.lc,this.fc);return new Ae(e.firestore,e.converter,function(s,i){const o=s.filters.concat([i]);return new vt(s.path,s.collectionGroup,s.explicitOrderBy.slice(),o,s.limit,s.limitType,s.startAt,s.endAt)}(e._query,r))}}function _S(n,e,t){const r=e,s=No("where",n);return new IS(s,r,t)}class ES extends Bs{constructor(e,t){super(),this.hc=e,this.dc=t,this.type="orderBy"}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new y(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Hn(s,i);return function(a,c){if(Ac(a)===null){const u=kc(a);u!==null&&_m(a,u,c.field)}}(r,o),o}(e._query,this.hc,this.dc);return new Ae(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new vt(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function bS(n,e="asc"){const t=e,r=No("orderBy",n);return new ES(r,t)}class ym extends Bs{constructor(e,t,r){super(),this.type=e,this._c=t,this.wc=r}_apply(e){return new Ae(e.firestore,e.converter,qf(e._query,this._c,this.wc))}}function TS(n){return tm("limit",n),new ym("limit",n,"F")}function SS(n){return tm("limitToLast",n),new ym("limitToLast",n,"L")}class vm extends Bs{constructor(e,t,r){super(),this.type=e,this.mc=t,this.gc=r}_apply(e){const t=Im(e,this.type,this.mc,this.gc);return new Ae(e.firestore,e.converter,function(r,s){return new vt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,t))}}function AS(...n){return new vm("startAt",n,!0)}function kS(...n){return new vm("startAfter",n,!1)}class wm extends Bs{constructor(e,t,r){super(),this.type=e,this.mc=t,this.gc=r}_apply(e){const t=Im(e,this.type,this.mc,this.gc);return new Ae(e.firestore,e.converter,function(r,s){return new vt(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,t))}}function NS(...n){return new wm("endBefore",n,!1)}function CS(...n){return new wm("endAt",n,!0)}function Im(n,e,t,r){if(t[0]=S(t[0]),t[0]instanceof ms)return function(s,i,o,a,c){if(!a)throw new y(f.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of nr(s))if(l.field.isKeyField())u.push(tr(i,a.key));else{const h=a.data.field(l.field);if(Sc(h))throw new y(f.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new y(f.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ot(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Cn(n.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new y(f.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let m=0;m<u.length;m++){const g=u[m];if(h[m].field.isKeyField()){if(typeof g!="string")throw new y(f.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!Nc(i)&&g.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const T=i.path.child(x.fromString(g));if(!I.isDocumentKey(T))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const C=new I(T);d.push(tr(o,C))}else{const T=hm(a,c,g);d.push(T)}}return new Ot(d,l)}(n._query,n.firestore._databaseId,s,e,t,r)}}function ch(n,e,t){if(typeof(t=S(t))=="string"){if(t==="")throw new y(f.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Nc(e)&&t.indexOf("/")!==-1)throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(x.fromString(t));if(!I.isDocumentKey(r))throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return tr(n,new I(r))}if(t instanceof B)return tr(n,t._key);throw new y(f.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${To(t)}.`)}function uh(n,e){if(!Array.isArray(n)||n.length===0)throw new y(f.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(n.length>10)throw new y(f.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function _m(n,e,t){if(!t.isEqual(e))throw new y(f.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{convertValue(e,t="none"){switch(hn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return W(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ln(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw b()}}convertObject(e,t){const r={};return bn(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new So(W(e.latitude),W(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Pf(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(os(e));default:return null}}convertTimestamp(e){const t=Pt(e);return new J(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=x.fromString(e);k(hp(r));const s=new ft(r.get(1),r.get(3)),i=new I(r.popFirst(5));return s.isEqual(t)||Z(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class DS extends yu{constructor(e){super(),this.firestore=e}convertBytes(e){return new ot(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new B(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Cn(e)}set(e,t,r){this._verifyNotCommitted();const s=St(e,this._firestore),i=Co(s.converter,t,r),o=ko(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,ee.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=St(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Mt?pu(this._dataReader,"WriteBatch.update",i._key,t,r,s):fu(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,ee.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=St(e,this._firestore);return this._mutations=this._mutations.concat(new Os(t._key,ee.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new y(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function St(n,e){if((n=S(n)).firestore!==e)throw new y(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(n){n=M(n,B);const e=M(n.firestore,z);return Xp(me(e),n._key).then(t=>vu(e,n,t))}class Rn extends yu{constructor(e){super(),this.firestore=e}convertBytes(e){return new ot(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new B(this.firestore,null,t)}}function xS(n){n=M(n,B);const e=M(n.firestore,z),t=me(e),r=new Rn(e);return WT(t,n._key).then(s=>new mt(e,r,n._key,s,new Qt(s!==null&&s.hasLocalMutations,!0),n.converter))}function OS(n){n=M(n,B);const e=M(n.firestore,z);return Xp(me(e),n._key,{source:"server"}).then(t=>vu(e,n,t))}function LS(n){n=M(n,Ae);const e=M(n.firestore,z),t=me(e),r=new Rn(e);return gm(n._query),Zp(t,n._query).then(s=>new Ft(e,r,n,s))}function MS(n){n=M(n,Ae);const e=M(n.firestore,z),t=me(e),r=new Rn(e);return zT(t,n._query).then(s=>new Ft(e,r,n,s))}function FS(n){n=M(n,Ae);const e=M(n.firestore,z),t=me(e),r=new Rn(e);return Zp(t,n._query,{source:"server"}).then(s=>new Ft(e,r,n,s))}function lh(n,e,t){n=M(n,B);const r=M(n.firestore,z),s=Co(n.converter,e,t);return $s(r,[ko(Cn(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,ee.none())])}function hh(n,e,t,...r){n=M(n,B);const s=M(n.firestore,z),i=Cn(s);let o;return o=typeof(e=S(e))=="string"||e instanceof Mt?pu(i,"updateDoc",n._key,e,t,r):fu(i,"updateDoc",n._key,e),$s(s,[o.toMutation(n._key,ee.exists(!0))])}function US(n){return $s(M(n.firestore,z),[new Os(n._key,ee.none())])}function VS(n,e){const t=M(n.firestore,z),r=qi(n),s=Co(n.converter,e);return $s(t,[ko(Cn(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,ee.exists(!1))]).then(()=>r)}function Em(n,...e){var t,r,s;n=S(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ca(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ca(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof B)u=M(n.firestore,z),l=Ir(n._key.path),c={next:h=>{e[o]&&e[o](vu(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=M(n,Ae);u=M(h.firestore,z),l=h._query;const d=new Rn(u);c={next:m=>{e[o]&&e[o](new Ft(u,d,h,m))},error:e[o+1],complete:e[o+2]},gm(n._query)}return function(h,d,m,g){const T=new Eo(g),C=new eu(d,T,m);return h.asyncQueue.enqueueAndForget(async()=>Qc(await ur(h),C)),()=>{T.pa(),h.asyncQueue.enqueueAndForget(async()=>Xc(await ur(h),C))}}(me(u),l,a,c)}function qS(n,e){return HT(me(n=M(n,z)),Ca(e)?e:{next:e})}function $s(n,e){return function(t,r){const s=new ue;return t.asyncQueue.enqueueAndForget(async()=>bT(await lu(t),r,s)),s.promise}(me(n),e)}function vu(n,e,t){const r=t.docs.get(e._key),s=new Rn(n);return new mt(n,s,e._key,r,new Qt(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Cn(e)}get(e){const t=St(e,this._firestore),r=new DS(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return b();const i=s[0];if(i.isFoundDocument())return new ms(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new ms(this._firestore,r,t._key,null,t.converter);throw b()})}set(e,t,r){const s=St(e,this._firestore),i=Co(s.converter,t,r),o=ko(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=St(e,this._firestore);let o;return o=typeof(t=S(t))=="string"||t instanceof Mt?pu(this._dataReader,"Transaction.update",i._key,t,r,s):fu(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=St(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=St(e,this._firestore),r=new Rn(this._firestore);return super.get(e).then(s=>new mt(this._firestore,r,t._key,s._document,new Qt(!1,!1),t.converter))}}function $S(n,e){return YT(me(n=M(n,z)),t=>e(new BS(n,t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jS(){return new qs("deleteField")}function GS(){return new du("serverTimestamp")}function KS(...n){return new pS("arrayUnion",n)}function WS(...n){return new mS("arrayRemove",n)}function zS(n){return new gS("increment",n)}(function(n,e=!0){(function(t){wr=t})(In),Ct(new rt("firestore",(t,{options:r})=>{const s=t.getProvider("app").getImmediate(),i=new z(s,new eE(t.getProvider("auth-internal")),new sE(t.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),i._setSettings(r),i},"PUBLIC")),et(ul,"3.4.7",n),et(ul,"3.4.7","esm2017")})();const HS="@firebase/firestore-compat",YS="0.1.16";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wu(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new y("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(){if(typeof Uint8Array>"u")throw new y("unimplemented","Uint8Arrays are not available in this environment.")}function fh(){if(!aE())throw new y("unimplemented","Blobs are unavailable in Firestore in this environment.")}class gs{constructor(e){this._delegate=e}static fromBase64String(e){return fh(),new gs(ot.fromBase64String(e))}static fromUint8Array(e){return dh(),new gs(ot.fromUint8Array(e))}toBase64(){return fh(),this._delegate.toBase64()}toUint8Array(){return dh(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(n){return JS(n,["next","error","complete"])}function JS(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{enableIndexedDbPersistence(e,t){return rS(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return sS(e._delegate)}clearIndexedDbPersistence(e){return iS(e._delegate)}}class bm{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof ft||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&ss("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){XT(this._delegate,e,t,r)}enableNetwork(){return aS(this._delegate)}disableNetwork(){return cS(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,em("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return oS(this._delegate)}onSnapshotsInSync(e){return qS(this._delegate,e)}get app(){if(!this._appCompat)throw new y("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new lr(this,nm(this._delegate,e))}catch(t){throw Ce(t,"collection()","Firestore.collection()")}}doc(e){try{return new Be(this,qi(this._delegate,e))}catch(t){throw Ce(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ne(this,ZT(this._delegate,e))}catch(t){throw Ce(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return $S(this._delegate,t=>e(new Tm(this,t)))}batch(){return me(this._delegate),new Sm(new RS(this._delegate,e=>$s(this._delegate,e)))}loadBundle(e){return uS(this._delegate,e)}namedQuery(e){return lS(this._delegate,e).then(t=>t?new Ne(this,t):null)}}class Do extends yu{constructor(e){super(),this.firestore=e}convertBytes(e){return new gs(new ot(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Be.forKey(t,this.firestore,null)}}function XS(n){J_(n)}class Tm{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new Do(e)}get(e){const t=Xt(e);return this._delegate.get(t).then(r=>new ys(this._firestore,new mt(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=Xt(e);return r?(wu("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=Xt(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=Xt(e);return this._delegate.delete(t),this}}class Sm{constructor(e){this._delegate=e}set(e,t,r){const s=Xt(e);return r?(wu("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=Xt(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=Xt(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class vn{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Gr(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new vs(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=vn.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new vn(e,new Do(e),t),s.set(t,i)),i}}vn.INSTANCES=new WeakMap;class Be{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Do(e)}static forPath(e,t,r){if(e.length%2!==0)throw new y("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Be(t,new B(t._delegate,r,new I(e)))}static forKey(e,t,r){return new Be(t,new B(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new lr(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new lr(this.firestore,nm(this._delegate,e))}catch(t){throw Ce(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=S(e),e instanceof B?rm(this._delegate,e):!1}set(e,t){t=wu("DocumentReference.set",t);try{return t?lh(this._delegate,e,t):lh(this._delegate,e)}catch(r){throw Ce(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?hh(this._delegate,e):hh(this._delegate,e,t,...r)}catch(s){throw Ce(s,"updateDoc()","DocumentReference.update()")}}delete(){return US(this._delegate)}onSnapshot(...e){const t=Am(e),r=km(e,s=>new ys(this.firestore,new mt(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return Em(this._delegate,t,r)}get(e){let t;return e?.source==="cache"?t=xS(this._delegate):e?.source==="server"?t=OS(this._delegate):t=PS(this._delegate),t.then(r=>new ys(this.firestore,new mt(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Be(this.firestore,e?this._delegate.withConverter(vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ce(n,e,t){return n.message=n.message.replace(e,t),n}function Am(n){for(const e of n)if(typeof e=="object"&&!Ra(e))return e;return{}}function km(n,e){var t,r;let s;return Ra(n[0])?s=n[0]:Ra(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class ys{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Be(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return mm(this._delegate,e._delegate)}}class vs extends ys{data(e){const t=this._delegate.data(e);return Q_(t!==void 0),t}}class Ne{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new Do(e)}where(e,t,r){try{return new Ne(this.firestore,Et(this._delegate,_S(e,t,r)))}catch(s){throw Ce(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Ne(this.firestore,Et(this._delegate,bS(e,t)))}catch(r){throw Ce(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ne(this.firestore,Et(this._delegate,TS(e)))}catch(t){throw Ce(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Ne(this.firestore,Et(this._delegate,SS(e)))}catch(t){throw Ce(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ne(this.firestore,Et(this._delegate,AS(...e)))}catch(t){throw Ce(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ne(this.firestore,Et(this._delegate,kS(...e)))}catch(t){throw Ce(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ne(this.firestore,Et(this._delegate,NS(...e)))}catch(t){throw Ce(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ne(this.firestore,Et(this._delegate,CS(...e)))}catch(t){throw Ce(t,"endAt()","Query.endAt()")}}isEqual(e){return sm(this._delegate,e._delegate)}get(e){let t;return e?.source==="cache"?t=MS(this._delegate):e?.source==="server"?t=FS(this._delegate):t=LS(this._delegate),t.then(r=>new Pa(this.firestore,new Ft(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=Am(e),r=km(e,s=>new Pa(this.firestore,new Ft(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return Em(this._delegate,t,r)}withConverter(e){return new Ne(this.firestore,e?this._delegate.withConverter(vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class ZS{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new vs(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Pa{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Ne(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new vs(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new ZS(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new vs(this._firestore,r))})}isEqual(e){return mm(this._delegate,e._delegate)}}class lr extends Ne{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Be(this.firestore,e):null}doc(e){try{return e===void 0?new Be(this.firestore,qi(this._delegate)):new Be(this.firestore,qi(this._delegate,e))}catch(t){throw Ce(t,"doc()","CollectionReference.doc()")}}add(e){return VS(this._delegate,e).then(t=>new Be(this.firestore,t))}isEqual(e){return rm(this._delegate,e._delegate)}withConverter(e){return new lr(this.firestore,e?this._delegate.withConverter(vn.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Xt(n){return M(n,B)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(...e){this._delegate=new Mt(...e)}static documentId(){return new Iu(ae.keyField().canonicalString())}isEqual(e){return e=S(e),e instanceof Mt?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(e){this._delegate=e}static serverTimestamp(){const e=GS();return e._methodName="FieldValue.serverTimestamp",new zt(e)}static delete(){const e=jS();return e._methodName="FieldValue.delete",new zt(e)}static arrayUnion(...e){const t=KS(...e);return t._methodName="FieldValue.arrayUnion",new zt(t)}static arrayRemove(...e){const t=WS(...e);return t._methodName="FieldValue.arrayRemove",new zt(t)}static increment(e){const t=zS(e);return t._methodName="FieldValue.increment",new zt(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0={Firestore:bm,GeoPoint:So,Timestamp:J,Blob:gs,Transaction:Tm,WriteBatch:Sm,DocumentReference:Be,DocumentSnapshot:ys,Query:Ne,QueryDocumentSnapshot:vs,QuerySnapshot:Pa,CollectionReference:lr,FieldPath:Iu,FieldValue:zt,setLogLevel:XS,CACHE_SIZE_UNLIMITED:nS};function t0(n,e){n.INTERNAL.registerComponent(new rt("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},e0)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n0(n){t0(n,(e,t)=>new bm(e,t,new QS)),n.registerVersion(HS,YS)}n0(rn);const r0=document.querySelector("#sign-in-btn"),s0=document.querySelector("#sign-up-btn"),Nm=document.querySelector(".container");s0.addEventListener("click",()=>{Nm.classList.add("sign-up-mode")});r0.addEventListener("click",()=>{Nm.classList.remove("sign-up-mode")});console.log("Primera linea script");document.addEventListener("DOMContentLoaded",()=>{console.log("Primer listener");const n={apiKey:"AIzaSyCgq36r1pfgHplUt7-HSIY_qNJiEybaIJc",authDomain:"florentia-f47b9.firebaseapp.com",projectId:"florentia-f47b9",storageBucket:"florentia-f47b9.appspot.com",messagingSenderId:"59886187087",appId:"1:59886187087:web:d274071e62e43f00b5b03a"};rn.initializeApp(n);const e=rn.firestore();console.log("Debajo de la inicializacion");const t=document.getElementById("login-form");console.log("¿Existe loginForm?",!!t),t.addEventListener("submit",async r=>{console.log("Hola vvs, si entro al listener"),r.preventDefault(),console.log("Submit interceptado");const s=document.getElementById("username").value.trim(),i=document.getElementById("password").value.trim();console.log("Credenciales:",s,i);try{console.log("Hola vvs, si sirvo");const o=await e.collection("users").where("code","==",s).where("password","==",i).get();if(console.log("Docs matches:",o.size),o.empty)alert("Usuario o contraseña incorrectos.");else{localStorage.setItem("codigoEstudiante",o.docs[0].data().code);const a=o.docs[0].data().role==="estudiante"?"/Home/":"/Teacher/";console.log("Redirigiendo a",a),window.location.replace(a);return}}catch(o){console.error("Error en login:",o)}})});
