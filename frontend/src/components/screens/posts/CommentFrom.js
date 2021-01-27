import React from 'react';

const CommentFrom = () => {
    return (
        <>
            <div class="post-form mb-3">
            <div class="card card-info">
              <div class="card-header bg-info text-white">
                Say Somthing...
              </div>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <textarea class="form-control form-control-lg" placeholder="Create a post"></textarea>
                  </div>
                  <button type="submit" class="btn my-3 btn-dark">Submit</button>
                </form>
              </div>
            </div>
          </div>  
        </>
    );
};

export default CommentFrom;