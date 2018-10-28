// ===========blog=======

var blogInfo = [
    {
      date:       'october 15th-21st',
      topic:    'Jquery | Project Management | Handlebars',
      notes:      ['1.JQUERY - With many libraries out there to make Javascript easier, Jquery is a popular library among them all. Long story short it makes life as a JS developer 100 times easier. Instead of creating a var to target an element such as <section>, then creating another var to create an element such as and finally appending to <section> to create inneHTML, this can all be done with one line in JQUERY. This might sound too good to be true but its true. The fact is that Jquery isn\'t implemented by everyone or all employers, it\'s many employers do use other libraries, which means that its important to learn how to work with libraries and know how to read thier documentation.' 
    ],
},

{

      date:       'october21st -30th',
      topic:    'Jquery | Project Management | Handlebars',
      notes:      ['1.JQUERY - With many libraries out there to make Javascript easier, Jquery is a popular library among them all. Long story short it makes life as a JS developer 100 times easier. Instead of creating a var to target an element such as <section>, then creating another var to create an element such as <h2> and finally appending <h2> to <section> to create inneHTML, this can all be done with one line in JQUERY. This might sound too good to be true but its true. The fact is that Jquery isn\'t implemented by everyone/all employers, it\'s many employers do use other libraries, which means that its important to learn how to work with libraries and know how to read thier documentation.' 
    ],

}


    
];

var blogArray= [];

function Blog(blogInfo) {
    this.date = blogInfo.date;
    this.topic = blogInfo.topic;
    this.notes = blogInfo.notes;


}
//has to be called after rawData
Blog.prototype.toHtml = function() {
    var $newTemplate = $('.blogTemplate').clone();
    $newTemplate.removeClass('blogTemplate');
    $('#blog').find('h2').text(this.topic);
    $('#blog').find('h3').text(this.date);
    $('#blog').find('p').text(this.notes);
    // $( "#blog" ).append( "<h2>this.topic</h2>" );
    console.log(this);

    return $newTemplate;



    
    
  };

  blogInfo.forEach(function(blogobject) {
    blogArray.push(new Blog(blogobject));
  });

  blogArray.forEach(function(newBlog){
    $('#blog').append(newBlog.toHtml());
  });

// USING OJBECTS, CONSTRUCTORS AND ARRAYS TO  TO CREATE A TEMPLATE FOR A SITE.

/*
1.create object litersal with key and values
2. create an empty array
3. set up constructor
4. set up prototype function which will traverse the dom
5. use a foreach() to iterate through each object literal from step and .push it to the empty array using the constructor (create a new object).
6. for each item in the array run the protoype.toHTML() function. 
7. target container where you will append the necessary html elements
$('#blog').find('h2').text(this.topic);
8.

*/













 



