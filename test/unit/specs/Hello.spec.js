import Vue from 'vue'
import Hello from '@/components/Hello'

const Vm = Vue.extend(Hello)
const hello = new Vm().$mount()

describe('Hello.vue', () => {
  console.log('testing..')
  console.log('hello component data: ', hello.msg)
  console.log('hello component method: ', hello.test())
  console.log('hello component mixins method: ', hello.testMixin())
  console.log('hello component mixins data: ', hello.mixinData)
  console.log('hello component props data: ', hello.title)

  it('should render correct component data', () => {
    expect(hello.msg).to.equal('Welcome to Your Vue.js App')
  })
  it('should render correct component method', () => {
    expect(hello.test()).to.equal(1)
  })
  it('should render correct mixins method', () => {
    expect(hello.testMixin()).to.equal(true)
  })
  it('should render correct mixins data', () => {
    expect(hello.mixinData).to.equal('is mixins data')
  })
  it('should render correct component data', () => {
    expect(hello.title).to.equal('is title')
  })
})
