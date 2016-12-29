// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
  this.collection = collection,
  this.itemsPerPage = itemsPerPage
}

// returns the number of items within the entire collection
PaginationHelper.prototype.itemCount = function() {
  return (this.collection).length;
}

// returns the number of pages
PaginationHelper.prototype.pageCount = function() {
  return Math.ceil((this.itemCount()) / this.itemsPerPage);
}

// returns the number of items on the current page. page_index is zero based.
// this method should return -1 for pageIndex values that are out of range
PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  var finalPage = (this.pageCount()-1);
  if(pageIndex > finalPage){
    return -1;
  }
  else if(pageIndex != finalPage){
    return this.itemsPerPage;
  }
  else{
    return this.itemCount() % this.itemsPerPage;
  }
}

// determines what page an item is on. Zero based indexes
// this method should return -1 for itemIndex values that are out of range
PaginationHelper.prototype.pageIndex = function(itemIndex) {
  var itemNum = this.itemCount();
  if((itemIndex > itemNum) || (itemIndex < 0)){
    console.log("Test2");
    return -1;
  }
    else{
      for(var i = 0; i < itemNum; i++){
        if(i == itemIndex){
        console.log("Test");
          return Math.floor(i / this.itemsPerPage);
        }
      }
    }
  }

var test = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 0);
console.log(test.itemCount());
console.log(test.pageCount());
console.log(test.pageItemCount(1));
console.log(test.pageIndex(-1));
