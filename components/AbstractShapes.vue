<template>
  <div>
    <div
      v-move:[rectangle.direction]="rectangle.moveValue"
      class="rectangle"
    ></div>

    <div
      v-transform:[triangleShape.transformType]="triangleShape.transformValue"
      v-move:[triangleShape.direction]="triangleShape.moveValue"
      class="triangle-shape-holder"
    >
      <div class="triangle-shape">
        <div class="inner-triangle"></div>
      </div>
    </div>

    <div
      v-transform:[triangleFill.transformType]="triangleFill.transformValue"
      v-move:[triangleFill.direction]="triangleFill.moveValue"
      class="triangle-fill"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    rectangle: {
      type: Object,
      default: () => {
        return { direction: 'left', moveValue: '50%' }
      },
    },
    triangleShape: {
      type: Object,
      default: () => ({
        transformType: 'rotate',
        transformValue: '90deg',
        direction: 'all',
        moveValue: {
          top: 27,
          right: 0,
          bottom: 0,
          left: 35,
        },
      }),
    },
    triangleFill: {
      type: Object,
      default: () => ({
        transformType: 'rotate',
        transformValue: '90deg',
        direction: 'all',
        moveValue: {
          top: 25,
          right: 0,
          bottom: 0,
          left: 60,
        },
      }),
    },
  },
}
</script>
