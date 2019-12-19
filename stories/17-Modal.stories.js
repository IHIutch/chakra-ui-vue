import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/vue'
import centered from '@storybook/addon-centered/vue'
import { Button, Modal, Text as KText, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from 'kiwi-core'
import Lorem from 'vue-lorem-ipsum'

storiesOf('UI | Modal', module)
  .addDecorator(centered)
  .add('Base Modal', () => ({
    components: { Button, Modal, Lorem, KText, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton },
    template: `
      <div>
        <Button left-icon="check" mb="3" variant-color="blue" @click="showModal" variant="outline">Show Modal</Button>
        <Button left-icon="star" id="final" ref="final" mb="3" variant-color="orange">I will receive focus when closed</Button>
        <Modal
          is-centered
          :is-open="isOpen"
          :on-close="modalClosed"
          :initial-focus-ref="$refs.save"
          :final-focus-ref="$refs.final"
        >
          <ModalContent ref="content" :content-ref="$refs.content">
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton @click="dismissModal" />
            <ModalBody>
              <KText fontWeight="bold" mb="1rem">
                You can scroll the content behind the modal
              </KText>
              <Lorem add="2s" />
            </ModalBody>
            <ModalFooter>
              <Button id="save" ref="save" variantColor="blue" mr="3">
                Save
              </Button>
              <Button id="cancel" ref="cancel" @click="dismissModal">Cancel</Button>
            </ModalFooter>
          </ModalContent>
          <ModalOverlay />
        </Modal>
      </div>
    `,
    data () {
      return {
        isOpen: false
      }
    },
    methods: {
      action: action('Button Clicked'),
      modalClosed (params) {
        action('MODAL: Closed', params)
      },
      showModal () {
        action('Showing modal')
        this.isOpen = true
      },
      dismissModal () {
        action('Dismissing modal')
        this.isOpen = false
      }
    }
  }))