class BlogarticlenewController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
      render json: BlogarticleNew.all
    end
    def show
      v = BlogarticleNew.find(params[:id])
      render json: v
   end
   def create
    v = !params[:blogtitle].empty?
    if (v)
      p=BlogarticleNew.create(
        'blogtitle': params[:blogtitle],
        'blogcontent': params[:blogcontent],
        'blogimglink': params[:blogimglink]
        )
      puts p
      render json: "Data Added"
     else
      render json: "Data not added"
    end
  end
  
  def update
    p=BlogarticleNew.find(params[:id].to_i)
    p.update(
      'blogtitle': params[:blogtitle],
      'blogcontent': params[:blogcontent],
      'blogimglink': params[:blogimglink]
    )
    render json: "Data Updated"
  end
  
  def destroy
    p=BlogarticleNew.find(params[:id].to_i)
    p.destroy
    render json: "Data Deleted"
  end
  end
  
