<script>
    export let tooltipText, xAxis, yAxis;
</script>

<div class="tooltip" role="tooltip" style="left: {xAxis}px; top: {yAxis}px;">
    {tooltipText}
</div>

<style>
    .tooltip {
        color: #fff;
        min-width: 80px;
        max-width: 250px;
        position: absolute;
        padding: 0.5rem 0.75rem;
        text-align: center;
        font-weight: 400;
        font-size: 0.7rem;
        line-height: 1.2;
        border-radius: 0.25rem;
        background-color: rgb(0, 0, 0);
        z-index: 100;
    }
    .tooltip:before {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 0;
        border-top: 5px solid rgb(0, 0, 0);
        border-right: 5px solid transparent;
        border-left: 5px solid transparent;
        font-size: 0;
        line-height: 0;
        z-index: 100;
    }

    /* Uncomment these to make tooltip more dynamic | Be sure to make these tooltip CSS global */
    /* .tooltip.bottom:before {
  bottom: auto;
  top: -5px;
  transform: rotate(-180deg);
}
.tooltip.right:before, .tooltip.bottom.right:before {
  left: auto;
  right: 1rem;
}
.tooltip.left:before, .tooltip.bottom.left:before {
  left: 1rem;
} */
</style>
