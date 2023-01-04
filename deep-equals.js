function deepEquals(v, t) {
    if( typeof v !== typeof t) return false 
    if (typeof v !== 'object') {
      if(Number.isNaN(v)&&Number.isNaN(t)) return true;
      return v===t
    }
    if(v===null||t===null) return v===t 
    if(v===t) return true 
    if(Array.isArray(v)&&Array.isArray(t)){
      if(v.length!==t.length)return false
      for(let i=0;i<v.length;i++){
        if(!deepEquals(v[i],t[i])) return false
      }
      return true
    }
    if(Array.isArray(v)||Array.isArray(t))return false;
    const valueOneKeys = Object.keys(v);
    const valueTwoKeys = Object.keys(t);
    if(valueOneKeys.length !== valueTwoKeys.length) return false;
    for(const key of valueOneKeys){
      if(!t.hasOwnProperty(key)) return false;
      if(!deepEquals(v[key], t[key])) return false 
    }
    return true
  }
  
  // Do not edit the line below.
  exports.deepEquals = deepEquals;
  