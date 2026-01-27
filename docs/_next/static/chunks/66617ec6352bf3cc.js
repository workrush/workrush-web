(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,64485,e=>{"use strict";let t,i;var n=e.i(43476),r=e.i(71645),a=e.i(75056),o=e.i(71753);function s(){return(s=Object.assign.bind()).apply(null,arguments)}var l=e.i(90072);let d=r.forwardRef(({args:e,children:t,...i},n)=>{let a=r.useRef(null);return r.useImperativeHandle(n,()=>a.current),r.useLayoutEffect(()=>void 0),r.createElement("mesh",s({ref:a},i),r.createElement("sphereGeometry",{attach:"geometry",args:e}),t)});var f=e.i(40859),f=f,c=l,u=l;let p=new u.Box3,h=new u.Vector3;class m extends u.InstancedBufferGeometry{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry",this.setIndex([0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5]),this.setAttribute("position",new u.Float32BufferAttribute([-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],3)),this.setAttribute("uv",new u.Float32BufferAttribute([-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],2))}applyMatrix4(e){let t=this.attributes.instanceStart,i=this.attributes.instanceEnd;return void 0!==t&&(t.applyMatrix4(e),i.applyMatrix4(e),t.needsUpdate=!0),null!==this.boundingBox&&this.computeBoundingBox(),null!==this.boundingSphere&&this.computeBoundingSphere(),this}setPositions(e){let t;e instanceof Float32Array?t=e:Array.isArray(e)&&(t=new Float32Array(e));let i=new u.InstancedInterleavedBuffer(t,6,1);return this.setAttribute("instanceStart",new u.InterleavedBufferAttribute(i,3,0)),this.setAttribute("instanceEnd",new u.InterleavedBufferAttribute(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(e,t=3){let i;e instanceof Float32Array?i=e:Array.isArray(e)&&(i=new Float32Array(e));let n=new u.InstancedInterleavedBuffer(i,2*t,1);return this.setAttribute("instanceColorStart",new u.InterleavedBufferAttribute(n,t,0)),this.setAttribute("instanceColorEnd",new u.InterleavedBufferAttribute(n,t,t)),this}fromWireframeGeometry(e){return this.setPositions(e.attributes.position.array),this}fromEdgesGeometry(e){return this.setPositions(e.attributes.position.array),this}fromMesh(e){return this.fromWireframeGeometry(new u.WireframeGeometry(e.geometry)),this}fromLineSegments(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}computeBoundingBox(){null===this.boundingBox&&(this.boundingBox=new u.Box3);let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;void 0!==e&&void 0!==t&&(this.boundingBox.setFromBufferAttribute(e),p.setFromBufferAttribute(t),this.boundingBox.union(p))}computeBoundingSphere(){null===this.boundingSphere&&(this.boundingSphere=new u.Sphere),null===this.boundingBox&&this.computeBoundingBox();let e=this.attributes.instanceStart,t=this.attributes.instanceEnd;if(void 0!==e&&void 0!==t){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)h.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(h)),h.fromBufferAttribute(t,r),n=Math.max(n,i.distanceToSquared(h));this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(e){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(e)}}var v=l,y=e.i(8560);let g=parseInt(l.REVISION.replace(/\D+/g,""));class S extends v.ShaderMaterial{constructor(e){super({type:"LineMaterial",uniforms:v.UniformsUtils.clone(v.UniformsUtils.merge([y.UniformsLib.common,y.UniformsLib.fog,{worldUnits:{value:1},linewidth:{value:1},resolution:{value:new v.Vector2(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}}])),vertexShader:`
				#include <common>
				#include <fog_pars_vertex>
				#include <logdepthbuf_pars_vertex>
				#include <clipping_planes_pars_vertex>

				uniform float linewidth;
				uniform vec2 resolution;

				attribute vec3 instanceStart;
				attribute vec3 instanceEnd;

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
						attribute vec4 instanceColorStart;
						attribute vec4 instanceColorEnd;
					#else
						varying vec3 vLineColor;
						attribute vec3 instanceColorStart;
						attribute vec3 instanceColorEnd;
					#endif
				#endif

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#ifdef USE_DASH

					uniform float dashScale;
					attribute float instanceDistanceStart;
					attribute float instanceDistanceEnd;
					varying float vLineDistance;

				#endif

				void trimSegment( const in vec4 start, inout vec4 end ) {

					// trim end segment so it terminates between the camera plane and the near plane

					// conservative estimate of the near plane
					float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
					float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
					float nearEstimate = - 0.5 * b / a;

					float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

					end.xyz = mix( start.xyz, end.xyz, alpha );

				}

				void main() {

					#ifdef USE_COLOR

						vLineColor = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

					#endif

					#ifdef USE_DASH

						vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
						vUv = uv;

					#endif

					float aspect = resolution.x / resolution.y;

					// camera space
					vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
					vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

					#ifdef WORLD_UNITS

						worldStart = start.xyz;
						worldEnd = end.xyz;

					#else

						vUv = uv;

					#endif

					// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
					// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
					// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
					// perhaps there is a more elegant solution -- WestLangley

					bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

					if ( perspective ) {

						if ( start.z < 0.0 && end.z >= 0.0 ) {

							trimSegment( start, end );

						} else if ( end.z < 0.0 && start.z >= 0.0 ) {

							trimSegment( end, start );

						}

					}

					// clip space
					vec4 clipStart = projectionMatrix * start;
					vec4 clipEnd = projectionMatrix * end;

					// ndc space
					vec3 ndcStart = clipStart.xyz / clipStart.w;
					vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

					// direction
					vec2 dir = ndcEnd.xy - ndcStart.xy;

					// account for clip-space aspect ratio
					dir.x *= aspect;
					dir = normalize( dir );

					#ifdef WORLD_UNITS

						// get the offset direction as perpendicular to the view vector
						vec3 worldDir = normalize( end.xyz - start.xyz );
						vec3 offset;
						if ( position.y < 0.5 ) {

							offset = normalize( cross( start.xyz, worldDir ) );

						} else {

							offset = normalize( cross( end.xyz, worldDir ) );

						}

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						float forwardOffset = dot( worldDir, vec3( 0.0, 0.0, 1.0 ) );

						// don't extend the line if we're rendering dashes because we
						// won't be rendering the endcaps
						#ifndef USE_DASH

							// extend the line bounds to encompass  endcaps
							start.xyz += - worldDir * linewidth * 0.5;
							end.xyz += worldDir * linewidth * 0.5;

							// shift the position of the quad so it hugs the forward edge of the line
							offset.xy -= dir * forwardOffset;
							offset.z += 0.5;

						#endif

						// endcaps
						if ( position.y > 1.0 || position.y < 0.0 ) {

							offset.xy += dir * 2.0 * forwardOffset;

						}

						// adjust for linewidth
						offset *= linewidth * 0.5;

						// set the world position
						worldPos = ( position.y < 0.5 ) ? start : end;
						worldPos.xyz += offset;

						// project the worldpos
						vec4 clip = projectionMatrix * worldPos;

						// shift the depth of the projected points so the line
						// segments overlap neatly
						vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
						clip.z = clipPose.z * clip.w;

					#else

						vec2 offset = vec2( dir.y, - dir.x );
						// undo aspect ratio adjustment
						dir.x /= aspect;
						offset.x /= aspect;

						// sign flip
						if ( position.x < 0.0 ) offset *= - 1.0;

						// endcaps
						if ( position.y < 0.0 ) {

							offset += - dir;

						} else if ( position.y > 1.0 ) {

							offset += dir;

						}

						// adjust for linewidth
						offset *= linewidth;

						// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
						offset /= resolution.y;

						// select end
						vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

						// back to clip space
						offset *= clip.w;

						clip.xy += offset;

					#endif

					gl_Position = clip;

					vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

					#include <logdepthbuf_vertex>
					#include <clipping_planes_vertex>
					#include <fog_vertex>

				}
			`,fragmentShader:`
				uniform vec3 diffuse;
				uniform float opacity;
				uniform float linewidth;

				#ifdef USE_DASH

					uniform float dashOffset;
					uniform float dashSize;
					uniform float gapSize;

				#endif

				varying float vLineDistance;

				#ifdef WORLD_UNITS

					varying vec4 worldPos;
					varying vec3 worldStart;
					varying vec3 worldEnd;

					#ifdef USE_DASH

						varying vec2 vUv;

					#endif

				#else

					varying vec2 vUv;

				#endif

				#include <common>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <clipping_planes_pars_fragment>

				#ifdef USE_COLOR
					#ifdef USE_LINE_COLOR_ALPHA
						varying vec4 vLineColor;
					#else
						varying vec3 vLineColor;
					#endif
				#endif

				vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

					float mua;
					float mub;

					vec3 p13 = p1 - p3;
					vec3 p43 = p4 - p3;

					vec3 p21 = p2 - p1;

					float d1343 = dot( p13, p43 );
					float d4321 = dot( p43, p21 );
					float d1321 = dot( p13, p21 );
					float d4343 = dot( p43, p43 );
					float d2121 = dot( p21, p21 );

					float denom = d2121 * d4343 - d4321 * d4321;

					float numer = d1343 * d4321 - d1321 * d4343;

					mua = numer / denom;
					mua = clamp( mua, 0.0, 1.0 );
					mub = ( d1343 + d4321 * ( mua ) ) / d4343;
					mub = clamp( mub, 0.0, 1.0 );

					return vec2( mua, mub );

				}

				void main() {

					#include <clipping_planes_fragment>

					#ifdef USE_DASH

						if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

						if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

					#endif

					float alpha = opacity;

					#ifdef WORLD_UNITS

						// Find the closest points on the view ray and the line segment
						vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
						vec3 lineDir = worldEnd - worldStart;
						vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

						vec3 p1 = worldStart + lineDir * params.x;
						vec3 p2 = rayEnd * params.y;
						vec3 delta = p1 - p2;
						float len = length( delta );
						float norm = len / linewidth;

						#ifndef USE_DASH

							#ifdef USE_ALPHA_TO_COVERAGE

								float dnorm = fwidth( norm );
								alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

							#else

								if ( norm > 0.5 ) {

									discard;

								}

							#endif

						#endif

					#else

						#ifdef USE_ALPHA_TO_COVERAGE

							// artifacts appear on some hardware if a derivative is taken within a conditional
							float a = vUv.x;
							float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
							float len2 = a * a + b * b;
							float dlen = fwidth( len2 );

							if ( abs( vUv.y ) > 1.0 ) {

								alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

							}

						#else

							if ( abs( vUv.y ) > 1.0 ) {

								float a = vUv.x;
								float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
								float len2 = a * a + b * b;

								if ( len2 > 1.0 ) discard;

							}

						#endif

					#endif

					vec4 diffuseColor = vec4( diffuse, alpha );
					#ifdef USE_COLOR
						#ifdef USE_LINE_COLOR_ALPHA
							diffuseColor *= vLineColor;
						#else
							diffuseColor.rgb *= vLineColor;
						#endif
					#endif

					#include <logdepthbuf_fragment>

					gl_FragColor = diffuseColor;

					#include <tonemapping_fragment>
					#include <${g>=154?"colorspace_fragment":"encodings_fragment"}>
					#include <fog_fragment>
					#include <premultiplied_alpha_fragment>

				}
			`,clipping:!0}),this.isLineMaterial=!0,this.onBeforeCompile=function(){this.transparent?this.defines.USE_LINE_COLOR_ALPHA="1":delete this.defines.USE_LINE_COLOR_ALPHA},Object.defineProperties(this,{color:{enumerable:!0,get:function(){return this.uniforms.diffuse.value},set:function(e){this.uniforms.diffuse.value=e}},worldUnits:{enumerable:!0,get:function(){return"WORLD_UNITS"in this.defines},set:function(e){!0===e?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}},linewidth:{enumerable:!0,get:function(){return this.uniforms.linewidth.value},set:function(e){this.uniforms.linewidth.value=e}},dashed:{enumerable:!0,get:function(){return"USE_DASH"in this.defines},set(e){!!e!="USE_DASH"in this.defines&&(this.needsUpdate=!0),!0===e?this.defines.USE_DASH="":delete this.defines.USE_DASH}},dashScale:{enumerable:!0,get:function(){return this.uniforms.dashScale.value},set:function(e){this.uniforms.dashScale.value=e}},dashSize:{enumerable:!0,get:function(){return this.uniforms.dashSize.value},set:function(e){this.uniforms.dashSize.value=e}},dashOffset:{enumerable:!0,get:function(){return this.uniforms.dashOffset.value},set:function(e){this.uniforms.dashOffset.value=e}},gapSize:{enumerable:!0,get:function(){return this.uniforms.gapSize.value},set:function(e){this.uniforms.gapSize.value=e}},opacity:{enumerable:!0,get:function(){return this.uniforms.opacity.value},set:function(e){this.uniforms.opacity.value=e}},resolution:{enumerable:!0,get:function(){return this.uniforms.resolution.value},set:function(e){this.uniforms.resolution.value.copy(e)}},alphaToCoverage:{enumerable:!0,get:function(){return"USE_ALPHA_TO_COVERAGE"in this.defines},set:function(e){!!e!="USE_ALPHA_TO_COVERAGE"in this.defines&&(this.needsUpdate=!0),!0===e?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1)}}}),this.setValues(e)}}let x=g>=125?"uv1":"uv2",w=new c.Vector4,b=new c.Vector3,E=new c.Vector3,_=new c.Vector4,A=new c.Vector4,L=new c.Vector4,U=new c.Vector3,M=new c.Matrix4,B=new c.Line3,z=new c.Vector3,O=new c.Box3,C=new c.Sphere,D=new c.Vector4;function j(e,t,n){return D.set(0,0,-t,1).applyMatrix4(e.projectionMatrix),D.multiplyScalar(1/D.w),D.x=i/n.width,D.y=i/n.height,D.applyMatrix4(e.projectionMatrixInverse),D.multiplyScalar(1/D.w),Math.abs(Math.max(D.x,D.y))}class I extends c.Mesh{constructor(e=new m,t=new S({color:0xffffff*Math.random()})){super(e,t),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let e=this.geometry,t=e.attributes.instanceStart,i=e.attributes.instanceEnd,n=new Float32Array(2*t.count);for(let e=0,r=0,a=t.count;e<a;e++,r+=2)b.fromBufferAttribute(t,e),E.fromBufferAttribute(i,e),n[r]=0===r?0:n[r-1],n[r+1]=n[r]+b.distanceTo(E);let r=new c.InstancedInterleavedBuffer(n,2,1);return e.setAttribute("instanceDistanceStart",new c.InterleavedBufferAttribute(r,1,0)),e.setAttribute("instanceDistanceEnd",new c.InterleavedBufferAttribute(r,1,1)),this}raycast(e,n){let r,a,o=this.material.worldUnits,s=e.camera;null!==s||o||console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let l=void 0!==e.params.Line2&&e.params.Line2.threshold||0;t=e.ray;let d=this.matrixWorld,f=this.geometry,u=this.material;if(i=u.linewidth+l,null===f.boundingSphere&&f.computeBoundingSphere(),C.copy(f.boundingSphere).applyMatrix4(d),o)r=.5*i;else{let e=Math.max(s.near,C.distanceToPoint(t.origin));r=j(s,e,u.resolution)}if(C.radius+=r,!1!==t.intersectsSphere(C)){if(null===f.boundingBox&&f.computeBoundingBox(),O.copy(f.boundingBox).applyMatrix4(d),o)a=.5*i;else{let e=Math.max(s.near,O.distanceToPoint(t.origin));a=j(s,e,u.resolution)}O.expandByScalar(a),!1!==t.intersectsBox(O)&&(o?function(e,n){let r=e.matrixWorld,a=e.geometry,o=a.attributes.instanceStart,s=a.attributes.instanceEnd,l=Math.min(a.instanceCount,o.count);for(let a=0;a<l;a++){B.start.fromBufferAttribute(o,a),B.end.fromBufferAttribute(s,a),B.applyMatrix4(r);let l=new c.Vector3,d=new c.Vector3;t.distanceSqToSegment(B.start,B.end,d,l),d.distanceTo(l)<.5*i&&n.push({point:d,pointOnLine:l,distance:t.origin.distanceTo(d),object:e,face:null,faceIndex:a,uv:null,[x]:null})}}(this,n):function(e,n,r){let a=n.projectionMatrix,o=e.material.resolution,s=e.matrixWorld,l=e.geometry,d=l.attributes.instanceStart,f=l.attributes.instanceEnd,u=Math.min(l.instanceCount,d.count),p=-n.near;t.at(1,L),L.w=1,L.applyMatrix4(n.matrixWorldInverse),L.applyMatrix4(a),L.multiplyScalar(1/L.w),L.x*=o.x/2,L.y*=o.y/2,L.z=0,U.copy(L),M.multiplyMatrices(n.matrixWorldInverse,s);for(let n=0;n<u;n++){if(_.fromBufferAttribute(d,n),A.fromBufferAttribute(f,n),_.w=1,A.w=1,_.applyMatrix4(M),A.applyMatrix4(M),_.z>p&&A.z>p)continue;if(_.z>p){let e=_.z-A.z,t=(_.z-p)/e;_.lerp(A,t)}else if(A.z>p){let e=A.z-_.z,t=(A.z-p)/e;A.lerp(_,t)}_.applyMatrix4(a),A.applyMatrix4(a),_.multiplyScalar(1/_.w),A.multiplyScalar(1/A.w),_.x*=o.x/2,_.y*=o.y/2,A.x*=o.x/2,A.y*=o.y/2,B.start.copy(_),B.start.z=0,B.end.copy(A),B.end.z=0;let l=B.closestPointToPointParameter(U,!0);B.at(l,z);let u=c.MathUtils.lerp(_.z,A.z,l),h=u>=-1&&u<=1,m=U.distanceTo(z)<.5*i;if(h&&m){B.start.fromBufferAttribute(d,n),B.end.fromBufferAttribute(f,n),B.start.applyMatrix4(s),B.end.applyMatrix4(s);let i=new c.Vector3,a=new c.Vector3;t.distanceSqToSegment(B.start,B.end,a,i),r.push({point:a,pointOnLine:i,distance:t.origin.distanceTo(a),object:e,face:null,faceIndex:n,uv:null,[x]:null})}}}(this,s,n))}}onBeforeRender(e){let t=this.material.uniforms;t&&t.resolution&&(e.getViewport(w),this.material.uniforms.resolution.value.set(w.z,w.w))}}class P extends m{constructor(){super(),this.isLineGeometry=!0,this.type="LineGeometry"}setPositions(e){let t=e.length-3,i=new Float32Array(2*t);for(let n=0;n<t;n+=3)i[2*n]=e[n],i[2*n+1]=e[n+1],i[2*n+2]=e[n+2],i[2*n+3]=e[n+3],i[2*n+4]=e[n+4],i[2*n+5]=e[n+5];return super.setPositions(i),this}setColors(e,t=3){let i=e.length-t,n=new Float32Array(2*i);if(3===t)for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5];else for(let r=0;r<i;r+=t)n[2*r]=e[r],n[2*r+1]=e[r+1],n[2*r+2]=e[r+2],n[2*r+3]=e[r+3],n[2*r+4]=e[r+4],n[2*r+5]=e[r+5],n[2*r+6]=e[r+6],n[2*r+7]=e[r+7];return super.setColors(n,t),this}fromLine(e){let t=e.geometry;return this.setPositions(t.attributes.position.array),this}}class T extends I{constructor(e=new P,t=new S({color:0xffffff*Math.random()})){super(e,t),this.isLine2=!0,this.type="Line2"}}let R=r.forwardRef(function({points:e,color:t=0xffffff,vertexColors:i,linewidth:n,lineWidth:a,segments:o,dashed:d,...c},u){var p,h;let v=(0,f.C)(e=>e.size),y=r.useMemo(()=>o?new I:new T,[o]),[g]=r.useState(()=>new S),x=(null==i||null==(p=i[0])?void 0:p.length)===4?4:3,w=r.useMemo(()=>{let n=o?new m:new P,r=e.map(e=>{let t=Array.isArray(e);return e instanceof l.Vector3||e instanceof l.Vector4?[e.x,e.y,e.z]:e instanceof l.Vector2?[e.x,e.y,0]:t&&3===e.length?[e[0],e[1],e[2]]:t&&2===e.length?[e[0],e[1],0]:e});if(n.setPositions(r.flat()),i){t=0xffffff;let e=i.map(e=>e instanceof l.Color?e.toArray():e);n.setColors(e.flat(),x)}return n},[e,o,i,x]);return r.useLayoutEffect(()=>{y.computeLineDistances()},[e,y]),r.useLayoutEffect(()=>{d?g.defines.USE_DASH="":delete g.defines.USE_DASH,g.needsUpdate=!0},[d,g]),r.useEffect(()=>()=>{w.dispose(),g.dispose()},[w]),r.createElement("primitive",s({object:y,ref:u},c),r.createElement("primitive",{object:w,attach:"geometry"}),r.createElement("primitive",s({object:g,attach:"material",color:t,vertexColors:!!i,resolution:[v.width,v.height],linewidth:null!=(h=null!=n?n:a)?h:1,dashed:d,transparent:4===x},c)))});function V(e,t,i){let n=Math.PI/180*(90-e),r=Math.PI/180*(t+180),a=-(i*Math.sin(n)*Math.cos(r)),o=i*Math.sin(n)*Math.sin(r),s=i*Math.cos(n);return new l.Vector3(a,s,o)}let H=[{name:"London",lat:51.5074,lng:-.1278},{name:"New York",lat:40.7128,lng:-74.006},{name:"Dubai",lat:25.2048,lng:55.2708},{name:"Mumbai",lat:19.076,lng:72.8777},{name:"Singapore",lat:1.3521,lng:103.8198},{name:"Sydney",lat:-33.8688,lng:151.2093},{name:"Berlin",lat:52.52,lng:13.405},{name:"Tokyo",lat:35.6762,lng:139.6503}],N=[[0,1],[0,3],[0,6],[2,3],[3,4],[4,7],[4,5],[1,7]];function G(){let e=(0,r.useRef)(null);(0,o.useFrame)(t=>{e.current&&(e.current.rotation.y=.1*t.clock.elapsedTime)});let t=(0,r.useMemo)(()=>{let e=[];for(let t=-60;t<=60;t+=30){let i=[];for(let e=0;e<=360;e+=5)i.push(V(t,e,1.5));e.push(i)}return e},[]),i=(0,r.useMemo)(()=>{let e=[];for(let t=0;t<360;t+=30){let i=[];for(let e=-90;e<=90;e+=5)i.push(V(e,t,1.5));e.push(i)}return e},[]),a=(0,r.useMemo)(()=>H.map(e=>V(e.lat,e.lng,1.5)),[]),s=(0,r.useMemo)(()=>N.map(([e,t])=>(function(e,t,i=50){let n=[];for(let r=0;r<=i;r++){let a=r/i,o=new l.Vector3().lerpVectors(e,t,a),s=.3*Math.sin(a*Math.PI);o.normalize().multiplyScalar(1.5+s),n.push(o)}return n})(V(H[e].lat,H[e].lng,1.5),V(H[t].lat,H[t].lng,1.5))),[]);return(0,n.jsxs)("group",{ref:e,children:[(0,n.jsx)(d,{args:[1.48,32,32],children:(0,n.jsx)("meshBasicMaterial",{color:"#0B9444",transparent:!0,opacity:.08})}),t.map((e,t)=>(0,n.jsx)(R,{points:e,color:"#0B9444",lineWidth:1,transparent:!0,opacity:.4},`lat-${t}`)),i.map((e,t)=>(0,n.jsx)(R,{points:e,color:"#0B9444",lineWidth:1,transparent:!0,opacity:.4},`lng-${t}`)),a.map((e,t)=>(0,n.jsxs)("mesh",{position:e,children:[(0,n.jsx)("sphereGeometry",{args:[.04,16,16]}),(0,n.jsx)("meshBasicMaterial",{color:"#0B9444"})]},`point-${t}`)),a.map((e,t)=>(0,n.jsxs)("mesh",{position:e,lookAt:new l.Vector3(0,0,0),children:[(0,n.jsx)("ringGeometry",{args:[.05,.08,32]}),(0,n.jsx)("meshBasicMaterial",{color:"#0B9444",transparent:!0,opacity:.7,side:l.DoubleSide})]},`ring-${t}`)),s.map((e,t)=>(0,n.jsx)(R,{points:e,color:"#0B9444",lineWidth:2,transparent:!0,opacity:.8},`arc-${t}`))]})}function W(){return(0,n.jsx)("div",{className:"w-full h-full min-h-[400px]",children:(0,n.jsxs)(a.Canvas,{camera:{position:[0,0,4],fov:45},dpr:[1,2],gl:{antialias:!0,alpha:!0},children:[(0,n.jsx)("ambientLight",{intensity:.5}),(0,n.jsx)(G,{})]})})}e.s(["Globe",()=>W],64485)},83379,e=>{e.n(e.i(64485))}]);