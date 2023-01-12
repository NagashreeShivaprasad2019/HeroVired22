class MovietabsController < ApplicationController
  before_action :set_movietab, only: %i[ show edit update destroy ]

  # GET /movietabs or /movietabs.json
  def index
    @movietabs = Movietab.all
  end

  # GET /movietabs/1 or /movietabs/1.json
  def show
  end

  # GET /movietabs/new
  def new
    @movietab = Movietab.new
  end

  # GET /movietabs/1/edit
  def edit
  end

  # POST /movietabs or /movietabs.json
  def create
    @movietab = Movietab.new(movietab_params)

    respond_to do |format|
      if @movietab.save
        format.html { redirect_to movietab_url(@movietab), notice: "Movietab was successfully created." }
        format.json { render :show, status: :created, location: @movietab }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @movietab.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /movietabs/1 or /movietabs/1.json
  def update
    respond_to do |format|
      if @movietab.update(movietab_params)
        format.html { redirect_to movietab_url(@movietab), notice: "Movietab was successfully updated." }
        format.json { render :show, status: :ok, location: @movietab }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @movietab.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /movietabs/1 or /movietabs/1.json
  def destroy
    @movietab.destroy

    respond_to do |format|
      format.html { redirect_to movietabs_url, notice: "Movietab was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_movietab
      @movietab = Movietab.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def movietab_params
      params.require(:movietab).permit(:name, :description, :director, :language)
    end
end
