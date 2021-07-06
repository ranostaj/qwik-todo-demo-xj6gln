/**
 * @license
 * Copyright BuilderIO All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */
import { QRL, injectFunction, jsxFactory, provideComponentProp, provideEntityState, Host, } from '../qwik.js';
export const _needed_by_JSX_ = jsxFactory; // eslint-disable-line @typescript-eslint/no-unused-vars
export default injectFunction(provideEntityState(provideComponentProp('$todos')), // TODO(type): fix cast
function FooterTemplate(todos) {
    const remaining = todos.items.length - todos.completed;
    function filterClick(mode) {
        const lMode = mode.toLowerCase();
        return (jsxFactory("li", null,
            jsxFactory("a", { class: { selected: todos.filter == lMode }, "on:click": QRL `base:qwik#emitEvent?$type=selectFilter&filter=${lMode}` }, mode)));
    }
    return (jsxFactory(Host, { class: "footer", "on:selectFilter": QRL `ui:/Footer_selectFilter` }, todos.items.length > 0 ? (jsxFactory(null, null,
        jsxFactory("span", { class: "todo-count" },
            jsxFactory("strong", null, remaining),
            remaining == 1 ? ' item' : ' items',
            " left"),
        jsxFactory("ul", { class: "filters" },
            filterClick('All'),
            filterClick('Active'),
            filterClick('Completed')),
        todos.completed > 0 ? (jsxFactory("button", { class: "clear-completed", "on:click": QRL `ui:/Footer_archive` }, "Clear completed")) : null)) : null));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRm9vdGVyX3RlbXBsYXRlLmpzIiwic291cmNlUm9vdCI6Ii4vIiwic291cmNlcyI6WyJzcmMvdWkvRm9vdGVyX3RlbXBsYXRlLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFHSCxPQUFPLEVBQ0wsR0FBRyxFQUNILGNBQWMsRUFDZCxVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLGtCQUFrQixFQUdsQixJQUFJLEdBQ0wsTUFBTSxZQUFZLENBQUM7QUFFcEIsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLFVBQVUsQ0FBQyxDQUFDLHdEQUF3RDtBQUNuRyxlQUFlLGNBQWMsQ0FDM0Isa0JBQWtCLENBQ2hCLG9CQUFvQixDQUFDLFFBQVEsQ0FBMkMsQ0FDekUsRUFBRSx1QkFBdUI7QUFDMUIsU0FBUyxjQUFjLENBQUMsS0FBVztJQUNqQyxNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO0lBQ3ZELFNBQVMsV0FBVyxDQUFDLElBQW9DO1FBQ3ZELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqQyxPQUFPLENBQ0w7WUFDRSxrQkFDRSxLQUFLLEVBQUUsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLEVBQUUsY0FDaEMsR0FBRyxDQUFBLGlEQUFpRCxLQUFLLEVBQUUsSUFFcEUsSUFBSSxDQUNILENBQ0QsQ0FDTixDQUFDO0lBQ0osQ0FBQztJQUNELE9BQU8sQ0FDTCxXQUFDLElBQUksSUFBQyxLQUFLLEVBQUMsUUFBUSxxQkFBa0IsR0FBRyxDQUFBLHlCQUF5QixJQUMvRCxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3hCO1FBQ0UscUJBQU0sS0FBSyxFQUFDLFlBQVk7WUFDdEIsMkJBQVMsU0FBUyxDQUFVO1lBQzNCLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBUTtvQkFDL0I7UUFDUCxtQkFBSSxLQUFLLEVBQUMsU0FBUztZQUNoQixXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2xCLFdBQVcsQ0FBQyxRQUFRLENBQUM7WUFDckIsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUN0QjtRQUNKLEtBQUssQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUNyQix1QkFBUSxLQUFLLEVBQUMsaUJBQWlCLGNBQVcsR0FBRyxDQUFBLG9CQUFvQixzQkFFeEQsQ0FDVixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ1AsQ0FDSixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQ0gsQ0FDUixDQUFDO0FBQ0osQ0FBQyxDQUNGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQnVpbGRlcklPIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL0J1aWxkZXJJTy9xd2lrL2Jsb2IvbWFpbi9MSUNFTlNFXG4gKi9cblxuaW1wb3J0IHsgVG9kbywgVG9kb0VudGl0eSB9IGZyb20gJy4uL2RhdGEvVG9kby5qcyc7XG5pbXBvcnQge1xuICBRUkwsXG4gIGluamVjdEZ1bmN0aW9uLFxuICBqc3hGYWN0b3J5LFxuICBwcm92aWRlQ29tcG9uZW50UHJvcCxcbiAgcHJvdmlkZUVudGl0eVN0YXRlLFxuICBQcm92aWRlcixcbiAgRW50aXR5S2V5LFxuICBIb3N0LFxufSBmcm9tICcuLi9xd2lrLmpzJztcblxuZXhwb3J0IGNvbnN0IF9uZWVkZWRfYnlfSlNYXyA9IGpzeEZhY3Rvcnk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG5leHBvcnQgZGVmYXVsdCBpbmplY3RGdW5jdGlvbihcbiAgcHJvdmlkZUVudGl0eVN0YXRlPFRvZG9FbnRpdHk+KFxuICAgIHByb3ZpZGVDb21wb25lbnRQcm9wKCckdG9kb3MnKSBhcyBhbnkgYXMgUHJvdmlkZXI8RW50aXR5S2V5PFRvZG9FbnRpdHk+PlxuICApLCAvLyBUT0RPKHR5cGUpOiBmaXggY2FzdFxuICBmdW5jdGlvbiBGb290ZXJUZW1wbGF0ZSh0b2RvczogVG9kbykge1xuICAgIGNvbnN0IHJlbWFpbmluZyA9IHRvZG9zLml0ZW1zLmxlbmd0aCAtIHRvZG9zLmNvbXBsZXRlZDtcbiAgICBmdW5jdGlvbiBmaWx0ZXJDbGljayhtb2RlOiAnQWxsJyB8ICdBY3RpdmUnIHwgJ0NvbXBsZXRlZCcpIHtcbiAgICAgIGNvbnN0IGxNb2RlID0gbW9kZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzcz17eyBzZWxlY3RlZDogdG9kb3MuZmlsdGVyID09IGxNb2RlIH19XG4gICAgICAgICAgICBvbjpjbGljaz17UVJMYGJhc2U6cXdpayNlbWl0RXZlbnQ/JHR5cGU9c2VsZWN0RmlsdGVyJmZpbHRlcj0ke2xNb2RlfWB9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge21vZGV9XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxIb3N0IGNsYXNzPVwiZm9vdGVyXCIgb246c2VsZWN0RmlsdGVyPXtRUkxgdWk6L0Zvb3Rlcl9zZWxlY3RGaWx0ZXJgfT5cbiAgICAgICAge3RvZG9zLml0ZW1zLmxlbmd0aCA+IDAgPyAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9kby1jb3VudFwiPlxuICAgICAgICAgICAgICA8c3Ryb25nPntyZW1haW5pbmd9PC9zdHJvbmc+XG4gICAgICAgICAgICAgIHtyZW1haW5pbmcgPT0gMSA/ICcgaXRlbScgOiAnIGl0ZW1zJ30gbGVmdFxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiZmlsdGVyc1wiPlxuICAgICAgICAgICAgICB7ZmlsdGVyQ2xpY2soJ0FsbCcpfVxuICAgICAgICAgICAgICB7ZmlsdGVyQ2xpY2soJ0FjdGl2ZScpfVxuICAgICAgICAgICAgICB7ZmlsdGVyQ2xpY2soJ0NvbXBsZXRlZCcpfVxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHt0b2Rvcy5jb21wbGV0ZWQgPiAwID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiY2xlYXItY29tcGxldGVkXCIgb246Y2xpY2s9e1FSTGB1aTovRm9vdGVyX2FyY2hpdmVgfT5cbiAgICAgICAgICAgICAgICBDbGVhciBjb21wbGV0ZWRcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L0hvc3Q+XG4gICAgKTtcbiAgfVxuKTtcbiJdfQ==