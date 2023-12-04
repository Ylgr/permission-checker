"use strict";(self.webpackChunkpermission_checker=self.webpackChunkpermission_checker||[]).push([[676],{916:(t,r,e)=>{e.d(r,{c:()=>n});var a=e(1313),i=e(7588);function n(t){return(0,i.i)(t)?a.aZ:t}},5086:(t,r,e)=>{e.d(r,{C:()=>o});var a=e(4942),i=e(1137),n=e(1313);class o{constructor(t){(0,a.Z)(this,"featureName",n.dn.name),(0,a.Z)(this,"set",(0,i.c)((async t=>{const r=await n.bJ.parseAsync(t);return i.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"setPlatformFeeInfo",args:[r.platform_fee_recipient,r.platform_fee_basis_points]})}))),this.contractWrapper=t}async get(){const[t,r]=await this.contractWrapper.read("getPlatformFeeInfo",[]);return n.bJ.parseAsync({platform_fee_recipient:t,platform_fee_basis_points:r})}}},1129:(t,r,e)=>{e.d(r,{a:()=>m,g:()=>h,h:()=>p,i:()=>d,m:()=>l,v:()=>u});var a=e(4029),i=e(2257),n=e(4554),o=e(4405),s=e(1313),c=e(7588);async function d(t,r,i,n,s){try{const p=(await e.e(25).then(e.t.bind(e,5025,19))).default,u=new a.CH(i,p,t),[l,m]=await Promise.all([u.supportsInterface(o.I),u.supportsInterface(o.a)]);if(l){var c;const o=(await Promise.resolve().then(e.t.bind(e,332,19))).default,p=new a.CH(i,o,t);if(await p.isApprovedForAll(s,r))return!0;let u;try{u=await p.getApproved(n)}catch(d){}return(null===(c=u)||void 0===c?void 0:c.toLowerCase())===r.toLowerCase()}if(m){const n=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,o=new a.CH(i,n,t);return await o.isApprovedForAll(s,r)}return console.error("Contract does not implement ERC 1155 or ERC 721."),!1}catch(p){return console.error("Failed to check if token is approved",p),!1}}async function p(t,r,a,i,n){const c=(await e.e(25).then(e.t.bind(e,5025,19))).default,d=new s.cu(t.getSignerOrProvider(),a,c,t.options,t.storage),[p,u]=await Promise.all([d.read("supportsInterface",[o.I]),d.read("supportsInterface",[o.a])]);if(p){const o=(await Promise.resolve().then(e.t.bind(e,332,19))).default,c=new s.cu(t.getSignerOrProvider(),a,o,t.options,t.storage);if(!await c.read("isApprovedForAll",[n,r])){(await c.read("getApproved",[i])).toLowerCase()===r.toLowerCase()||await c.sendTransaction("setApprovalForAll",[r,!0])}}else{if(!u)throw Error("Contract must implement ERC 1155 or ERC 721.");{const i=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,o=new s.cu(t.getSignerOrProvider(),a,i,t.options,t.storage);await o.read("isApprovedForAll",[n,r])||await o.sendTransaction("setApprovalForAll",[r,!0])}}}function u(t){if((0,n.Z)(void 0!==t.assetContractAddress&&null!==t.assetContractAddress,"Asset contract address is required"),(0,n.Z)(void 0!==t.buyoutPricePerToken&&null!==t.buyoutPricePerToken,"Buyout price is required"),(0,n.Z)(void 0!==t.listingDurationInSeconds&&null!==t.listingDurationInSeconds,"Listing duration is required"),(0,n.Z)(void 0!==t.startTimestamp&&null!==t.startTimestamp,"Start time is required"),(0,n.Z)(void 0!==t.tokenId&&null!==t.tokenId,"Token ID is required"),(0,n.Z)(void 0!==t.quantity&&null!==t.quantity,"Quantity is required"),"NewAuctionListing"===t.type)(0,n.Z)(void 0!==t.reservePricePerToken&&null!==t.reservePricePerToken,"Reserve price is required")}async function l(t,r,e){return{quantity:e.quantityDesired,pricePerToken:e.pricePerToken,currencyContractAddress:e.currency,buyerAddress:e.offeror,quantityDesired:e.quantityWanted,currencyValue:await(0,c.a)(t,e.currency,e.quantityWanted.mul(e.pricePerToken)),listingId:r}}function m(t,r,e){if(e=i.O$.from(e),t=i.O$.from(t),r=i.O$.from(r),t.eq(i.O$.from(0)))return!1;return r.sub(t).mul(s.dy).div(t).gte(e)}async function h(t,r,e){const a=[];for(;r-t>o.D;)a.push(e(t,t+o.D-1)),t+=o.D;return a.push(e(t,r-1)),await Promise.all(a)}},8145:(t,r,e)=>{e.d(r,{M:()=>b,a:()=>k,b:()=>O});var a=e(4942),i=e(2257),n=e(4029),o=e(9601),s=e(8624),c=e(4554),d=e(916),p=e(7588),u=e(4434),l=e(3778),m=e(1313),h=e(1129),g=e(4405),f=e(1137),w=e(2655),v=e(874),y=e(4376),A=e(8249);const C=(()=>v.z.object({assetContractAddress:m.bd,tokenId:m.ba,quantity:m.ba.default(1),currencyContractAddress:m.bd.default(m.aZ),pricePerToken:m.cz,startTimestamp:w.R.default(new Date),endTimestamp:w.E,isReservedListing:v.z.boolean().default(!1)}))();let W=function(t){return t[t.UNSET=0]="UNSET",t[t.Created=1]="Created",t[t.Completed=2]="Completed",t[t.Cancelled=3]="Cancelled",t[t.Active=4]="Active",t[t.Expired=5]="Expired",t}({});class b{constructor(t,r){(0,a.Z)(this,"featureName",m.dk.name),(0,a.Z)(this,"createListing",(0,f.c)((async t=>{const r=await C.parseAsync(t);await(0,h.h)(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress());const e=await(0,u.n)(this.contractWrapper.getProvider(),r.pricePerToken,r.currencyContractAddress),a=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return r.startTimestamp.lt(a)&&(r.startTimestamp=i.O$.from(a)),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createListing",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:(0,d.c)(r.currencyContractAddress),pricePerToken:e,startTimestamp:r.startTimestamp,endTimestamp:r.endTimestamp,reserved:r.isReservedListing}],parse:t=>({id:this.contractWrapper.parseLogs("NewListing",null===t||void 0===t?void 0:t.logs)[0].args.listingId,receipt:t})})}))),(0,a.Z)(this,"createListingsBatch",(0,f.c)((async t=>{const r=(await Promise.all(t.map((t=>this.createListing.prepare(t))))).map((t=>t.encode()));return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>this.contractWrapper.parseLogs("NewListing",null===t||void 0===t?void 0:t.logs).map((r=>({id:r.args.listingId,receipt:t})))})}))),(0,a.Z)(this,"updateListing",(0,f.c)((async(t,r)=>{const e=await C.parseAsync(r);await(0,h.h)(this.contractWrapper,this.getAddress(),e.assetContractAddress,e.tokenId,await this.contractWrapper.getSignerAddress());const a=await(0,u.n)(this.contractWrapper.getProvider(),e.pricePerToken,e.currencyContractAddress);return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"updateListing",args:[t,{assetContract:e.assetContractAddress,tokenId:e.tokenId,quantity:e.quantity,currency:(0,d.c)(e.currencyContractAddress),pricePerToken:a,startTimestamp:e.startTimestamp,endTimestamp:e.endTimestamp,reserved:e.isReservedListing}],parse:t=>({id:this.contractWrapper.parseLogs("UpdatedListing",null===t||void 0===t?void 0:t.logs)[0].args.listingId,receipt:t})})}))),(0,a.Z)(this,"cancelListing",(0,f.c)((async t=>f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelListing",args:[t]})))),(0,a.Z)(this,"buyFromListing",(0,f.c)((async(t,r,e)=>{e&&(e=await(0,m.aP)(e));const a=await this.validateListing(i.O$.from(t)),{valid:n,error:o}=await this.isStillValidListing(a,r);if(!n)throw new Error("Listing ".concat(t," is no longer valid. ").concat(o));const s=e||await this.contractWrapper.getSignerAddress(),c=i.O$.from(r),d=i.O$.from(a.pricePerToken).mul(c),p=await this.contractWrapper.getCallOverrides()||{};return await(0,l.s)(this.contractWrapper,d,a.currencyContractAddress,p),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"buyFromListing",args:[t,s,c,a.currencyContractAddress,d],overrides:p})}))),(0,a.Z)(this,"approveBuyerForReservedListing",(0,f.c)((async(t,r)=>{if(await this.isBuyerApprovedForListing(t,r))throw new Error("Buyer ".concat(r," already approved for listing ").concat(t,"."));return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveBuyerForListing",args:[t,r,!0]})}))),(0,a.Z)(this,"revokeBuyerApprovalForReservedListing",(0,f.c)((async(t,r)=>{if(await this.isBuyerApprovedForListing(t,r))return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveBuyerForListing",args:[t,r,!1]});throw new Error("Buyer ".concat(r," not approved for listing ").concat(t,"."))}))),(0,a.Z)(this,"approveCurrencyForListing",(0,f.c)((async(t,r,e)=>{const a=await this.validateListing(i.O$.from(t)),n=await(0,m.aP)(r);n===a.currencyContractAddress&&(0,c.Z)(e===a.pricePerToken,"Approving listing currency with a different price.");const o=await this.contractWrapper.read("currencyPriceForListing",[t,n]);return(0,c.Z)(e===o,"Currency already approved with this price."),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveCurrencyForListing",args:[t,n,e]})}))),(0,a.Z)(this,"revokeCurrencyApprovalForListing",(0,f.c)((async(t,r)=>{const e=await this.validateListing(i.O$.from(t)),a=await(0,m.aP)(r);if(a===e.currencyContractAddress)throw new Error("Can't revoke approval for main listing currency.");const n=await this.contractWrapper.read("currencyPriceForListing",[t,a]);return(0,c.Z)(!n.isZero(),"Currency not approved."),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"approveCurrencyForListing",args:[t,a,i.O$.from(0)]})}))),this.contractWrapper=t,this.storage=r,this.events=new y.a(this.contractWrapper),this.encoder=new p.C(this.contractWrapper),this.interceptor=new A.C(this.contractWrapper),this.estimator=new y.G(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalListings",[])}async getAll(t){const r=await this.getTotalCount(),e=i.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=r.toNumber();if(0===a)throw new Error("No listings exist on the contract.");let n=[];n=(await(0,h.g)(e,a,((t,r)=>this.contractWrapper.read("getAllListings",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapListing(t))))}async getAllValid(t){const r=await this.getTotalCount(),e=i.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=r.toNumber();if(0===a)throw new Error("No listings exist on the contract.");let n=[];n=(await(0,h.g)(e,a,((t,r)=>this.contractWrapper.read("getAllValidListings",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapListing(t))))}async getListing(t){const r=await this.contractWrapper.read("getListing",[t]);return await this.mapListing(r)}async isBuyerApprovedForListing(t,r){if(!(await this.validateListing(i.O$.from(t))).isReservedListing)throw new Error("Listing ".concat(t," is not a reserved listing."));return await this.contractWrapper.read("isBuyerApprovedForListing",[t,await(0,m.aP)(r)])}async isCurrencyApprovedForListing(t,r){return await this.validateListing(i.O$.from(t)),await this.contractWrapper.read("isCurrencyApprovedForListing",[t,await(0,m.aP)(r)])}async currencyPriceForListing(t,r){const e=await this.validateListing(i.O$.from(t)),a=await(0,m.aP)(r);if(a===e.currencyContractAddress)return e.pricePerToken;if(!await this.isCurrencyApprovedForListing(t,a))throw new Error("Currency ".concat(a," is not approved for Listing ").concat(t,"."));return await this.contractWrapper.read("currencyPriceForListing",[t,a])}async validateListing(t){try{return await this.getListing(t)}catch(r){throw console.error("Error getting the listing with id ".concat(t)),r}}async mapListing(t){let r=W.UNSET;const e=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=i.O$.from(t.startTimestamp).gt(e)?W.Created:i.O$.from(t.endTimestamp).lt(e)?W.Expired:W.Active;break;case 2:r=W.Completed;break;case 3:r=W.Cancelled}return{assetContractAddress:t.assetContract,currencyContractAddress:t.currency,pricePerToken:t.pricePerToken.toString(),currencyValuePerToken:await(0,p.a)(this.contractWrapper.getProvider(),t.currency,t.pricePerToken),id:t.listingId.toString(),tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),startTimeInSeconds:i.O$.from(t.startTimestamp).toNumber(),asset:await(0,g.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),endTimeInSeconds:i.O$.from(t.endTimestamp).toNumber(),creatorAddress:t.listingCreator,isReservedListing:t.reserved,status:r}}async isStillValidListing(t,r){if(!await(0,h.i)(this.contractWrapper.getProvider(),this.getAddress(),t.assetContractAddress,t.tokenId,t.creatorAddress))return{valid:!1,error:"Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress,"' is not approved for transfer")};const a=this.contractWrapper.getProvider(),i=(await e.e(25).then(e.t.bind(e,5025,19))).default,o=new n.CH(t.assetContractAddress,i,a),s=await o.supportsInterface(g.I),c=await o.supportsInterface(g.a);if(s){var d;const r=(await Promise.resolve().then(e.t.bind(e,332,19))).default,i=new n.CH(t.assetContractAddress,r,a);let o;try{o=await i.ownerOf(t.tokenId)}catch(p){}const s=(null===(d=o)||void 0===d?void 0:d.toLowerCase())===t.creatorAddress.toLowerCase();return{valid:s,error:s?void 0:"Seller is not the owner of Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress," anymore'")}}if(c){const i=(await Promise.resolve().then(e.t.bind(e,8455,19))).default,o=new n.CH(t.assetContractAddress,i,a),s=(await o.balanceOf(t.creatorAddress,t.tokenId)).gte(r||t.quantity);return{valid:s,error:s?void 0:"Seller does not have enough balance of Token '".concat(t.tokenId,"' from contract '").concat(t.assetContractAddress," to fulfill the listing")}}return{valid:!1,error:"Contract does not implement ERC 1155 or ERC 721."}}async applyFilter(t,r){let e=[...t];if(r){if(r.seller){const t=await(0,m.aP)(r.seller);e=e.filter((r=>r.listingCreator.toString().toLowerCase()===(null===t||void 0===t?void 0:t.toString().toLowerCase())))}if(r.tokenContract){const t=await(0,m.aP)(r.tokenContract);e=e.filter((r=>r.assetContract.toString().toLowerCase()===(null===t||void 0===t?void 0:t.toString().toLowerCase())))}void 0!==r.tokenId&&(e=e.filter((t=>{var e;return t.tokenId.toString()===(null===r||void 0===r||null===(e=r.tokenId)||void 0===e?void 0:e.toString())})))}return null!==r&&void 0!==r&&r.count&&r.count<e.length?e.slice(0,r.count):e}}const T=(()=>v.z.object({assetContractAddress:m.bd,tokenId:m.ba,quantity:m.ba.default(1),currencyContractAddress:m.bd.default(m.aZ),minimumBidAmount:m.cz,buyoutBidAmount:m.cz,timeBufferInSeconds:m.ba.default(900),bidBufferBps:m.ba.default(500),startTimestamp:w.R.default(new Date),endTimestamp:w.E}))();class k{constructor(t,r){(0,a.Z)(this,"featureName",m.dl.name),(0,a.Z)(this,"createAuction",(0,f.c)((async t=>{const r=T.parse(t);await(0,h.h)(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress());const e=await(0,u.n)(this.contractWrapper.getProvider(),r.buyoutBidAmount,r.currencyContractAddress),a=await(0,u.n)(this.contractWrapper.getProvider(),r.minimumBidAmount,r.currencyContractAddress),n=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;return r.startTimestamp.lt(n)&&(r.startTimestamp=i.O$.from(n)),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"createAuction",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:(0,d.c)(r.currencyContractAddress),minimumBidAmount:a,buyoutBidAmount:e,timeBufferInSeconds:r.timeBufferInSeconds,bidBufferBps:r.bidBufferBps,startTimestamp:r.startTimestamp,endTimestamp:r.endTimestamp}],parse:t=>({id:this.contractWrapper.parseLogs("NewAuction",t.logs)[0].args.auctionId,receipt:t})})}))),(0,a.Z)(this,"createAuctionsBatch",(0,f.c)((async t=>{const r=(await Promise.all(t.map((t=>this.createAuction.prepare(t))))).map((t=>t.encode()));return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[r],parse:t=>this.contractWrapper.parseLogs("NewAuction",null===t||void 0===t?void 0:t.logs).map((r=>({id:r.args.auctionId,receipt:t})))})}))),(0,a.Z)(this,"buyoutAuction",(0,f.c)((async t=>{const r=await this.validateAuction(i.O$.from(t)),e=await(0,p.f)(this.contractWrapper.getProvider(),r.currencyContractAddress);return this.makeBid.prepare(t,o.formatUnits(r.buyoutBidAmount,e.decimals))}))),(0,a.Z)(this,"makeBid",(0,f.c)((async(t,r)=>{const e=await this.validateAuction(i.O$.from(t)),a=await(0,u.n)(this.contractWrapper.getProvider(),r,e.currencyContractAddress);if(a.eq(i.O$.from(0)))throw new Error("Cannot make a bid with 0 value");if(i.O$.from(e.buyoutBidAmount).gt(0)&&a.gt(e.buyoutBidAmount))throw new Error("Bid amount must be less than or equal to buyoutBidAmount");if(await this.getWinningBid(t)){const r=await this.isWinningBid(t,a);(0,c.Z)(r,"Bid price is too low based on the current winning bid and the bid buffer")}else{const t=a,r=i.O$.from(e.minimumBidAmount);(0,c.Z)(t.gte(r),"Bid price is too low based on minimum bid amount")}const n=await this.contractWrapper.getCallOverrides()||{};return await(0,l.s)(this.contractWrapper,a,e.currencyContractAddress,n),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"bidInAuction",args:[t,a],overrides:n})}))),(0,a.Z)(this,"cancelAuction",(0,f.c)((async t=>{if(await this.getWinningBid(t))throw new Error("Bids already made.");return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelAuction",args:[t]})}))),(0,a.Z)(this,"closeAuctionForBidder",(0,f.c)((async(t,r)=>{r||(r=await this.contractWrapper.getSignerAddress());const e=await this.validateAuction(i.O$.from(t));try{return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"collectAuctionTokens",args:[i.O$.from(t)]})}catch(a){throw a.message.includes("Marketplace: auction still active.")?new m.w(t.toString(),e.endTimeInSeconds.toString()):a}}))),(0,a.Z)(this,"closeAuctionForSeller",(0,f.c)((async t=>{const r=await this.validateAuction(i.O$.from(t));try{return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"collectAuctionPayout",args:[i.O$.from(t)]})}catch(e){throw e.message.includes("Marketplace: auction still active.")?new m.w(t.toString(),r.endTimeInSeconds.toString()):e}}))),(0,a.Z)(this,"executeSale",(0,f.c)((async t=>{const r=await this.validateAuction(i.O$.from(t));try{const r=await this.getWinningBid(t);(0,c.Z)(r,"No winning bid found");const e=this.encoder.encode("collectAuctionPayout",[t]),a=this.encoder.encode("collectAuctionTokens",[t]);return f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"multicall",args:[[e,a]]})}catch(e){throw e.message.includes("Marketplace: auction still active.")?new m.w(t.toString(),r.endTimeInSeconds.toString()):e}}))),this.contractWrapper=t,this.storage=r,this.events=new y.a(this.contractWrapper),this.encoder=new p.C(this.contractWrapper),this.interceptor=new A.C(this.contractWrapper),this.estimator=new y.G(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalAuctions",[])}async getAll(t){const r=await this.getTotalCount(),e=i.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=r.toNumber();if(0===a)throw new Error("No auctions exist on the contract.");let n=[];n=(await(0,h.g)(e,a,((t,r)=>this.contractWrapper.read("getAllAuctions",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapAuction(t))))}async getAllValid(t){const r=await this.getTotalCount(),e=i.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=r.toNumber();if(0===a)throw new Error("No auctions exist on the contract.");let n=[];n=(await(0,h.g)(e,a,((t,r)=>this.contractWrapper.read("getAllValidAuctions",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapAuction(t))))}async getAuction(t){const r=await this.contractWrapper.read("getAuction",[t]);return await this.mapAuction(r)}async getWinningBid(t){await this.validateAuction(i.O$.from(t));const r=await this.contractWrapper.read("getWinningBid",[t]);if(r._bidder!==s.d)return await this.mapBid(t.toString(),r._bidder,r._currency,r._bidAmount.toString())}async isWinningBid(t,r){return await this.contractWrapper.read("isNewWinningBid",[t,r])}async getWinner(t){const r=await this.validateAuction(i.O$.from(t)),e=await this.contractWrapper.read("getWinningBid",[t]),a=i.O$.from(Math.floor(Date.now()/1e3)),n=i.O$.from(r.endTimeInSeconds);if(a.gt(n)&&e._bidder!==s.d)return e._bidder;const o=new y.a(this.contractWrapper),c=(await o.getEvents("AuctionClosed")).find((r=>r.data.auctionId.eq(i.O$.from(t))));if(!c)throw new Error("Could not find auction with ID ".concat(t," in closed auctions"));return c.data.winningBidder}async getBidBufferBps(t){return(await this.getAuction(t)).bidBufferBps}async getMinimumNextBid(t){const[r,e,a]=await Promise.all([this.getBidBufferBps(t),this.getWinningBid(t),this.validateAuction(i.O$.from(t))]),n=e?i.O$.from(e.bidAmount):i.O$.from(a.minimumBidAmount),o=n.add(n.mul(r).div(1e4));return(0,p.a)(this.contractWrapper.getProvider(),a.currencyContractAddress,o)}async validateAuction(t){try{return await this.getAuction(t)}catch(r){throw console.error("Error getting the auction with id ".concat(t)),r}}async mapAuction(t){let r=W.UNSET;const e=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=i.O$.from(t.startTimestamp).gt(e)?W.Created:i.O$.from(t.endTimestamp).lt(e)?W.Expired:W.Active;break;case 2:r=W.Completed;break;case 3:r=W.Cancelled}return{id:t.auctionId.toString(),creatorAddress:t.auctionCreator,assetContractAddress:t.assetContract,tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),currencyContractAddress:t.currency,minimumBidAmount:t.minimumBidAmount.toString(),minimumBidCurrencyValue:await(0,p.a)(this.contractWrapper.getProvider(),t.currency,t.minimumBidAmount),buyoutBidAmount:t.buyoutBidAmount.toString(),buyoutCurrencyValue:await(0,p.a)(this.contractWrapper.getProvider(),t.currency,t.buyoutBidAmount),timeBufferInSeconds:i.O$.from(t.timeBufferInSeconds).toNumber(),bidBufferBps:i.O$.from(t.bidBufferBps).toNumber(),startTimeInSeconds:i.O$.from(t.startTimestamp).toNumber(),endTimeInSeconds:i.O$.from(t.endTimestamp).toNumber(),asset:await(0,g.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),status:r}}async mapBid(t,r,e,a){const i=await(0,m.aP)(r),n=await(0,m.aP)(e);return{auctionId:t,bidderAddress:i,currencyContractAddress:n,bidAmount:a,bidAmountCurrencyValue:await(0,p.a)(this.contractWrapper.getProvider(),n,a)}}async applyFilter(t,r){let e=[...t];if(r){if(r.seller){const t=await(0,m.aP)(r.seller);e=e.filter((r=>r.auctionCreator.toString().toLowerCase()===(null===t||void 0===t?void 0:t.toString().toLowerCase())))}if(r.tokenContract){const t=await(0,m.aP)(r.tokenContract);e=e.filter((r=>r.assetContract.toString().toLowerCase()===(null===t||void 0===t?void 0:t.toString().toLowerCase())))}void 0!==r.tokenId&&(e=e.filter((t=>{var e;return t.tokenId.toString()===(null===r||void 0===r||null===(e=r.tokenId)||void 0===e?void 0:e.toString())})))}return null!==r&&void 0!==r&&r.count&&r.count<e.length?e.slice(0,r.count):e}}const P=(()=>v.z.object({assetContractAddress:m.bd,tokenId:m.ba,quantity:m.ba.default(1),currencyContractAddress:m.bd.default(m.aZ),totalPrice:m.cz,endTimestamp:w.E}))();class O{constructor(t,r){(0,a.Z)(this,"featureName",m.dm.name),(0,a.Z)(this,"makeOffer",(0,f.c)((async t=>{const r=await P.parseAsync(t),e=await this.contractWrapper.getChainID(),a=(0,p.i)(r.currencyContractAddress)?m.a_[e].wrapped.address:r.currencyContractAddress,i=await(0,u.n)(this.contractWrapper.getProvider(),r.totalPrice,a),n=await this.contractWrapper.getCallOverrides();return await(0,l.s)(this.contractWrapper,i,a,n),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"makeOffer",args:[{assetContract:r.assetContractAddress,tokenId:r.tokenId,quantity:r.quantity,currency:a,totalPrice:i,expirationTimestamp:r.endTimestamp}],parse:t=>({id:this.contractWrapper.parseLogs("NewOffer",null===t||void 0===t?void 0:t.logs)[0].args.offerId,receipt:t})})}))),(0,a.Z)(this,"cancelOffer",(0,f.c)((async t=>f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"cancelOffer",args:[t]})))),(0,a.Z)(this,"acceptOffer",(0,f.c)((async t=>{const r=await this.validateOffer(i.O$.from(t)),{valid:e,error:a}=await this.isStillValidOffer(r);if(!e)throw new Error("Offer ".concat(t," is no longer valid. ").concat(a));const n=await this.contractWrapper.getCallOverrides()||{};return await(0,h.h)(this.contractWrapper,this.getAddress(),r.assetContractAddress,r.tokenId,await this.contractWrapper.getSignerAddress()),f.T.fromContractWrapper({contractWrapper:this.contractWrapper,method:"acceptOffer",args:[t],overrides:n})}))),this.contractWrapper=t,this.storage=r,this.events=new y.a(this.contractWrapper),this.encoder=new p.C(this.contractWrapper),this.interceptor=new A.C(this.contractWrapper),this.estimator=new y.G(this.contractWrapper)}getAddress(){return this.contractWrapper.address}async getTotalCount(){return await this.contractWrapper.read("totalOffers",[])}async getAll(t){const r=await this.getTotalCount(),e=i.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=r.toNumber();if(0===a)throw new Error("No offers exist on the contract.");let n=[];n=(await(0,h.g)(e,a,((t,r)=>this.contractWrapper.read("getAllOffers",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapOffer(t))))}async getAllValid(t){const r=await this.getTotalCount(),e=i.O$.from((null===t||void 0===t?void 0:t.start)||0).toNumber(),a=r.toNumber();if(0===a)throw new Error("No offers exist on the contract.");let n=[];n=(await(0,h.g)(e,a,((t,r)=>this.contractWrapper.read("getAllValidOffers",[t,r])))).flat();const o=await this.applyFilter(n,t);return await Promise.all(o.map((t=>this.mapOffer(t))))}async getOffer(t){const r=await this.contractWrapper.read("getOffer",[t]);return await this.mapOffer(r)}async validateOffer(t){try{return await this.getOffer(t)}catch(r){throw console.error("Error getting the offer with id ".concat(t)),r}}async mapOffer(t){let r=W.UNSET;const e=(await this.contractWrapper.getProvider().getBlock("latest")).timestamp;switch(t.status){case 1:r=i.O$.from(t.expirationTimestamp).lt(e)?W.Expired:W.Active;break;case 2:r=W.Completed;break;case 3:r=W.Cancelled}return{id:t.offerId.toString(),offerorAddress:t.offeror,assetContractAddress:t.assetContract,currencyContractAddress:t.currency,tokenId:t.tokenId.toString(),quantity:t.quantity.toString(),totalPrice:t.totalPrice.toString(),currencyValue:await(0,p.a)(this.contractWrapper.getProvider(),t.currency,t.totalPrice),asset:await(0,g.c)(t.assetContract,this.contractWrapper.getProvider(),t.tokenId,this.storage),endTimeInSeconds:i.O$.from(t.expirationTimestamp).toNumber(),status:r}}async isStillValidOffer(t){if(i.O$.from(Math.floor(Date.now()/1e3)).gt(t.endTimeInSeconds))return{valid:!1,error:"Offer with ID ".concat(t.id," has expired")};const r=await this.contractWrapper.getChainID(),a=(0,p.i)(t.currencyContractAddress)?m.a_[r].wrapped.address:t.currencyContractAddress,n=this.contractWrapper.getProvider(),o=(await Promise.resolve().then(e.t.bind(e,9242,19))).default,s=new m.cu(n,a,o,{},this.storage);if((await s.read("balanceOf",[t.offerorAddress])).lt(t.totalPrice))return{valid:!1,error:"Offeror ".concat(t.offerorAddress," doesn't have enough balance of token ").concat(a)};return(await s.read("allowance",[t.offerorAddress,this.getAddress()])).lt(t.totalPrice)?{valid:!1,error:"Offeror ".concat(t.offerorAddress," hasn't approved enough amount of token ").concat(a)}:{valid:!0,error:""}}async applyFilter(t,r){let e=[...t];if(r){if(r.offeror){const t=await(0,m.aP)(r.offeror);e=e.filter((r=>r.offeror.toString().toLowerCase()===(null===t||void 0===t?void 0:t.toString().toLowerCase())))}if(r.tokenContract){const t=await(0,m.aP)(r.tokenContract);e=e.filter((r=>r.assetContract.toString().toLowerCase()===(null===t||void 0===t?void 0:t.toString().toLowerCase())))}void 0!==r.tokenId&&(e=e.filter((t=>{var e;return t.tokenId.toString()===(null===r||void 0===r||null===(e=r.tokenId)||void 0===e?void 0:e.toString())})))}return null!==r&&void 0!==r&&r.count&&r.count<e.length?e.slice(0,r.count):e}}}}]);
//# sourceMappingURL=676.173eabf0.chunk.js.map