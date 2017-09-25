
    var Edgevalue,left,right,value,root,height,Node,tree,nodeObjectChild,leftinsertion,level= 0,valueforLeft,valueforRight;
    var NodeCount= 0,NodeCountOfNewNodeObject= 1;
 function newNode(valueforNewNode){
    this.left=null;
    this.right=null;
    this.value=valueforNewNode;
    ++NodeCount;
    this.Edgevalue=null;
    //this.NodeCountOfNewNodeObject=NodeCount;
 }
   function valueOfEdge(){
       this.valueforEdge;
   }

   function treeforNode(){
       this.root=null;
       this.height=0;
   }

    function insertInTree(){
        //a case where tree is empty+
        tree= new treeforNode();

    }
    function insertIntoTree(){

        Node = new newNode(Number(document.getElementById("inputList").value));
        if(tree.root==null){
           tree.root=Node;
           return;
       }
        searchEmptyPlaceToInsert(tree.root,Node,Node.value);
    }

    function searchEmptyPlaceToInsert(nodeObject,Node,value1) {
        /*
        if(nodeObject==null){
            nodeObject=Node;
            return;
        }
        if(nodeObject.left==null){
            //a case where root's left wing is empty
            nodeObject.left=Node;
            nodeObject.Edgevalue=0;
            leftinsertion=true;
            return;
        }
        if(nodeObject.right==null){
            //a case where root's right wing is empty
            nodeObject.right=Node;
            nodeObject.Edgevalue=1;
            leftinsertion=false;
            return;
        }*/
    recurse(nodeObject,Node,value1);
    }
        function recurse(bst,node,value1) {
            if (bst.value > value1 && bst.left === null) {
                bst.left = node;
            } else if (bst.value > value1) {
                recurse(bst.left,node,value1);
            } else if (bst.value < value1 && bst.right === null) {
                bst.right = node;
            } else if (bst.value < value1) {
                recurse(bst.right,node,value1);
            }
        }

        /*if(leftinsertion) {
            nodeObject = nodeObject.right;

        }else{
            nodeObject = nodeObject.left;
        }*/


