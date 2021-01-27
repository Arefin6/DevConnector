import React from 'react';

const Comments = () => {

    return (
        <>
         <div class="comments">
          
          <div class="card card-body mb-3">
            <div class="row">
              <div class="col-md-2">
                <a href="profile.html">
                  <img class="rounded-circle d-none d-md-block" src="https://www.gravatar.com/avatar/anything?s=200&d=mm" alt="" />
                </a>
                <br />
                <p class="text-center">Kevin Smith</p>
              </div>
              <div class="col-md-10">
                <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint possimus corporis sunt necessitatibus! Minus
                  nesciunt soluta suscipit nobis.</p>
              </div>
            </div>
          </div>
        </div>
 
        </>
    );
};

export default Comments;